import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_DATA } from '../data/mockData';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF9F6] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-14 border border-stone-200/90 shadow-2xl">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-800 mb-3">
          <Sparkles className="w-3 h-3 text-brand-800" />
          <span>RENOVATION MASTERY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 mb-4">
          Before & After Craftsmanship
        </h2>
        <p className="text-stone-600 text-sm sm:text-base">
          Slide horizontally to witness how TileCraft transforms outdated structural layouts into serene, high-end stone sanctuaries.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[360px] sm:h-[500px] md:h-[580px] rounded-[2.5rem] overflow-hidden select-none cursor-ew-resize shadow-luxury-lg border border-stone-200"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* "After" Image (Full background) */}
        <img
          src={BEFORE_AFTER_DATA.afterImage}
          alt="After Renovation"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-brand-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest pointer-events-none">
          After: TileCraft Luxe
        </div>

        {/* "Before" Image (Clipped overlay) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={BEFORE_AFTER_DATA.beforeImage}
            alt="Before Renovation"
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-charcoal-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest pointer-events-none">
            Before Renovation
          </div>
        </div>

        {/* Split Divider Line & Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-2xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-brand-900 border-2 border-white shadow-xl flex items-center justify-center text-white">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
