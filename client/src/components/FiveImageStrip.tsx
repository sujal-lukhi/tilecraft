import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_FIVE_CATEGORIES } from '../data/mockData';

interface FiveImageStripProps {
  onSelectCategory: (categoryName: string) => void;
}

export const FiveImageStrip: React.FC<FiveImageStripProps> = ({ onSelectCategory }) => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF9F6] rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 border border-stone-200/90 shadow-2xl">
        {/* 5 images line to line grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {FEATURED_FIVE_CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.title)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-2.5">
                  <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-900 shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Title Label Box matching the screenshot */}
              <div className="p-3 bg-sand-100/80 group-hover:bg-brand-50 border-t border-stone-200/70 transition-colors text-center">
                <h4 className="font-serif font-bold text-xs sm:text-[13px] text-charcoal-900 group-hover:text-brand-900 tracking-tight leading-tight line-clamp-1">
                  {item.title}
                </h4>
                <span className="text-[10px] text-stone-500 block mt-0.5 font-medium line-clamp-1">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
