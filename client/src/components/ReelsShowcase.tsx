import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Heart, Eye, ArrowUpRight, 
  X, ChevronLeft, ChevronRight, Sparkles, Share2, Check, ExternalLink
} from 'lucide-react';
import { REELS_DATA } from '../data/mockData';
import { ReelItem } from '../types';

interface ReelsShowcaseProps {
  onOpenBooking: (serviceName: string) => void;
}

// Subcomponent for each Reel Card to guarantee seamless video playback
const ReelCard: React.FC<{
  reel: ReelItem;
  index: number;
  isLiked: boolean;
  onToggleLike: (reelId: string, e: React.MouseEvent) => void;
  onOpenModal: (reel: ReelItem, index: number) => void;
}> = ({ reel, index, isLiked, onToggleLike, onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay restriction handled silently
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(reel, index)}
      className="group relative rounded-[2rem] overflow-hidden bg-stone-900 aspect-[9/16] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer border border-stone-200"
    >
      {/* Video preview */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        poster={reel.thumbnailUrl}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

      {/* Top Header Tags */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-white border border-white/20">
          {reel.category}
        </span>
        <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white/90 text-[11px]">
          <Eye className="w-3 h-3 text-brand-300" />
          <span>{reel.views}</span>
        </div>
      </div>

      {/* Center Play Indicator */}
      <div className={`absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl transition-all duration-300 pointer-events-none ${
        isPlaying ? 'opacity-0 scale-90' : 'opacity-90 group-hover:opacity-100 group-hover:scale-110'
      }`}>
        <Play className="w-6 h-6 fill-white ml-0.5" />
      </div>

      {/* Bottom Information Bar */}
      <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
        <div className="flex items-center space-x-2 text-xs text-brand-300 font-medium mb-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isPlaying ? 'Playing Live Preview' : 'Hover to Play Reel'}</span>
        </div>

        <h3 className="font-serif text-base sm:text-lg font-semibold text-white leading-snug mb-2 group-hover:text-brand-200 transition-colors">
          {reel.title}
        </h3>

        <p className="text-xs text-stone-300 line-clamp-2 mb-4 font-light leading-relaxed">
          {reel.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/15">
          <button
            onClick={(e) => onToggleLike(reel.id, e)}
            className={`flex items-center space-x-1 text-xs font-semibold transition-colors ${
              isLiked ? 'text-rose-400' : 'text-white/80 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400' : ''}`} />
            <span>{reel.likes + (isLiked ? 1 : 0)}</span>
          </button>

          <span className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-200 group-hover:text-white transition-colors">
            <span>Watch Full Reel</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export const ReelsShowcase: React.FC<ReelsShowcaseProps> = ({ onOpenBooking }) => {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState<'video' | 'instagram'>('video');
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleOpenModal = (reel: ReelItem, index: number) => {
    setActiveReel(reel);
    setActiveReelIndex(index);
    setIsPlaying(true);
    setIsMuted(true); // Start muted to ensure 100% browser autoplay approval
    setViewMode('video');
  };

  const handleCloseModal = () => {
    setActiveReel(null);
  };

  const handlePrevReel = () => {
    const newIdx = (activeReelIndex - 1 + REELS_DATA.length) % REELS_DATA.length;
    setActiveReelIndex(newIdx);
    setActiveReel(REELS_DATA[newIdx]);
    setIsPlaying(true);
  };

  const handleNextReel = () => {
    const newIdx = (activeReelIndex + 1) % REELS_DATA.length;
    setActiveReelIndex(newIdx);
    setActiveReel(REELS_DATA[newIdx]);
    setIsPlaying(true);
  };

  // Safe playback trigger when modal video changes or opens
  useEffect(() => {
    if (activeReel && modalVideoRef.current && viewMode === 'video') {
      modalVideoRef.current.muted = isMuted;
      const promise = modalVideoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (modalVideoRef.current) {
              modalVideoRef.current.muted = true;
              setIsMuted(true);
              modalVideoRef.current.play().catch(() => {});
            }
          });
      }
    }
  }, [activeReel, isMuted, viewMode]);

  const toggleLike = (reelId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedReels(prev => ({
      ...prev,
      [reelId]: !prev[reelId]
    }));
  };

  const handleShare = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="reels" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF9F6] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-14 border border-stone-200/90 shadow-2xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-800" />
              <span>WATCH IN MOTION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight">
              Craftsmanship Walkthroughs <br className="hidden sm:inline" />
              & Video Reels
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-stone-600 text-xs sm:text-sm max-w-md">
              Experience our master Italian marble fabrication, bespoke luxury kitchens, and spa bathroom installations captured live on site.
            </p>
            <a 
              href="https://www.instagram.com/tilecraftinteriors/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-900/10 hover:bg-brand-900/20 text-brand-900 text-xs font-semibold transition-colors shrink-0"
            >
              <svg className="w-4 h-4 fill-brand-800" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@tilecraftinteriors</span>
            </a>
          </div>
        </div>

        {/* 4-Reel Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {REELS_DATA.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={index}
              isLiked={!!likedReels[reel.id]}
              onToggleLike={toggleLike}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Immersive Full Screen Reel Player Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-stone-950 rounded-3xl sm:rounded-[2.5rem] border border-stone-800 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]">
            
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Close Player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous / Next Arrow Controls (Desktop) */}
            <button
              onClick={handlePrevReel}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-white/20 text-white items-center justify-center transition-colors z-20 border border-white/20"
              aria-label="Previous Reel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextReel}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-white/20 text-white items-center justify-center transition-colors z-20 border border-white/20"
              aria-label="Next Reel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Left Side: 9:16 Video Player Container / Instagram Embed */}
            <div className="md:w-1/2 bg-black relative flex items-center justify-center min-h-[380px] sm:min-h-[520px]">
              {viewMode === 'video' ? (
                <>
                  <video
                    ref={modalVideoRef}
                    src={activeReel.videoUrl}
                    poster={activeReel.thumbnailUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full max-h-[75vh] object-cover object-center"
                  />

                  {/* Sound Toggle Button */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
                    <button
                      onClick={() => {
                        const newMuted = !isMuted;
                        setIsMuted(newMuted);
                        if (modalVideoRef.current) {
                          modalVideoRef.current.muted = newMuted;
                          modalVideoRef.current.play().catch(() => {});
                        }
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border transition-all flex items-center space-x-1.5 ${
                        isMuted 
                          ? 'bg-amber-500/80 text-white border-amber-300/40 animate-pulse' 
                          : 'bg-black/60 text-white border-white/20'
                      }`}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>Tap to Unmute 🔊</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Sound On</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Play / Pause Toggle Center Button */}
                  <button
                    onClick={() => {
                      if (modalVideoRef.current) {
                        if (isPlaying) {
                          modalVideoRef.current.pause();
                          setIsPlaying(false);
                        } else {
                          modalVideoRef.current.play().catch(() => {});
                          setIsPlaying(true);
                        }
                      }
                    }}
                    className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-opacity ${
                      isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
                  </button>
                </>
              ) : (
                /* Embedded Instagram Player */
                <div className="w-full h-full min-h-[480px] p-2 flex flex-col items-center justify-center bg-stone-900">
                  <iframe
                    src={activeReel.instagramUrl && (activeReel.instagramUrl.includes('/p/') || activeReel.instagramUrl.includes('/reel/')) 
                      ? (activeReel.instagramUrl.endsWith('/') ? `${activeReel.instagramUrl}embed` : `${activeReel.instagramUrl}/embed`)
                      : 'https://www.instagram.com/p/DcNktoTt5hY/embed'
                    }
                    className="w-full h-[520px] rounded-2xl border-0"
                    title="Instagram Reel"
                    allowTransparency={true}
                    allow="encrypted-media"
                  />
                </div>
              )}
            </div>

            {/* Right Side: Reel Metadata, Studio Tag, Description & Consultation Action */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-white overflow-y-auto">
              <div>
                {/* Studio Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <a 
                    href="https://www.instagram.com/tilecraftinteriors/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                      TC
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-semibold text-sm text-white group-hover:text-brand-300 transition-colors">tilecraftinteriors</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-sky-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                      </div>
                      <span className="text-[11px] text-stone-400">Ahmedabad, Gujarat • TILECRAFT INTERIORS</span>
                    </div>
                  </a>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleShare}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Share Link"
                    >
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* View Switcher: Walkthrough Video vs Live Instagram */}
                <div className="flex items-center space-x-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-5">
                  <button
                    onClick={() => setViewMode('video')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                      viewMode === 'video' 
                        ? 'bg-brand-800 text-white shadow-sm' 
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    HD Video Walkthrough
                  </button>
                  <button
                    onClick={() => setViewMode('instagram')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center space-x-1 ${
                      viewMode === 'instagram' 
                        ? 'bg-brand-800 text-white shadow-sm' 
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    <span>Instagram Reel</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Category & Title */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700 text-brand-200 font-bold text-[10px] uppercase tracking-wider mb-2">
                    {activeReel.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                    {activeReel.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-stone-300 text-sm leading-relaxed mb-6 font-light">
                  {activeReel.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeReel.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-brand-300 font-medium bg-white/5 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Instagram Link button */}
                {activeReel.instagramUrl && (
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs text-brand-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 transition-colors mb-4"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Open in Instagram App</span>
                    <ExternalLink className="w-3 h-3 ml-1 text-stone-400" />
                  </a>
                )}
              </div>

              {/* Bottom CTA / Appointment Booking for this exact design */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => toggleLike(activeReel.id)}
                      className={`flex items-center space-x-1.5 ${
                        likedReels[activeReel.id] ? 'text-rose-400 font-bold' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedReels[activeReel.id] ? 'fill-rose-400' : ''}`} />
                      <span>{activeReel.likes + (likedReels[activeReel.id] ? 1 : 0)} Likes</span>
                    </button>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-stone-400" />
                      <span>{activeReel.views} views</span>
                    </span>
                  </div>
                  <span className="text-stone-400">Duration: {activeReel.duration}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      handleCloseModal();
                      onOpenBooking(activeReel.category);
                    }}
                    className="flex-1 py-3.5 rounded-full bg-brand-800 hover:bg-brand-700 text-white font-semibold text-sm shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95"
                  >
                    <span>Book Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/919313684573?text=Hi%20Tilecraft%20Interiors,%20I%20saw%20your%20Instagram%20reel%20and%20want%20to%20enquire%20about%20interior%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95 shrink-0"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
