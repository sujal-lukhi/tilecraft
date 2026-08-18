import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/mockData';

export const AboutGallery: React.FC = () => {
  return (
    <section id="about" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF9F6] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-14 border border-stone-200/90 shadow-2xl">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-md">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-800 mb-4">
            ABOUT US
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight">
            Architecture <br className="hidden sm:inline" />
            Interior.
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision, marble detailing, and timeless harmony.
          </p>
        </div>
      </div>

      {/* 4-Card Curated Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {GALLERY_PROJECTS.map((item) => (
          <div 
            key={item.id}
            className="group relative rounded-3xl overflow-hidden bg-stone-200 aspect-[4/5] sm:aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Bottom Content Card */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-200 mb-1">
                {item.category}
              </span>
              <h3 className="font-serif text-lg font-medium text-white mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Top Right Corner Arrow */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
