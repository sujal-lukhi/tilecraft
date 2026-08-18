import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-sand-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden bg-[#FAF9F6] border border-stone-200/90 shadow-2xl">
        {/* Top Text Overlay Section inside the hero container */}
        <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 px-6 sm:px-12 text-center max-w-4xl mx-auto">
          {/* Circular Stamp / Badge */}
          <div className="inline-flex items-center justify-center mb-6 relative group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-brand-900/25 flex items-center justify-center p-2 relative">
              <svg className="w-full h-full animate-spin-slow text-brand-900" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] uppercase font-bold tracking-[0.24em] fill-brand-900">
                  <textPath href="#circlePath" startOffset="0%">
                    * DESIGN SINCE 1993 * BEST INTERIOR
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-brand-900/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-900" />
              </div>
            </div>
          </div>

          {/* Hero Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold text-charcoal-900 tracking-tight leading-[1.08] mb-6">
            Elevating Spaces <br />
            <span className="italic font-normal font-serif text-brand-900">Crafting Dreams</span>
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We specialize in transforming visions into reality. Explore our portfolio of innovative architectural, bespoke stone craftsmanship, and luxury interior design projects.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-brand-900 text-white text-sm sm:text-base font-medium shadow-lg shadow-brand-900/20 hover:bg-brand-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>Book an appointment</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Hero Visual Image Showcase */}
        <div className="relative w-full h-[320px] sm:h-[460px] md:h-[540px] px-3 sm:px-6 pb-3 sm:pb-6">
          <div className="relative w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden group shadow-inner">
            <img
              src={HERO_IMAGE}
              alt="Luxury Contemporary Living Space by TileCraft Interiors"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Subtle floating glass badge in image corner */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glass-pill px-4 sm:px-5 py-2.5 rounded-full flex items-center space-x-2.5 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-charcoal-900">
                Crafted in Bespoke Italian Stone & Natural Oak
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
