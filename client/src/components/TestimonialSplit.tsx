import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialSplit: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] overflow-hidden bg-brand-900 grid grid-cols-1 lg:grid-cols-12 shadow-luxury-lg min-h-[560px]">
        {/* Left Testimonial Box (Forest Emerald) */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-white relative z-10">
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-widest text-brand-200 mb-6">
              TESTIMONIALS
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
              Client Stories
            </h2>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 mb-6 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed font-light mb-8 italic">
              "{current.quote}"
            </blockquote>
          </div>

          {/* Author info & navigation controls */}
          <div className="pt-6 border-t border-white/15 flex items-end justify-between">
            <div>
              <div className="font-serif font-semibold text-lg text-white">
                {current.author}
              </div>
              <div className="text-xs sm:text-sm text-brand-200/80">
                {current.role} • {current.location}
              </div>
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/15 flex items-center justify-center text-white transition-colors active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/15 flex items-center justify-center text-white transition-colors active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right High-Res Visual */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-brand-950">
          <img
            key={current.id}
            src={current.image}
            alt={`${current.author} Luxury Interior Showcase`}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-900 via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};
