import React from 'react';
import { STATS } from '../data/mockData';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF9F6] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-stone-200/90 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${
                idx !== 0 ? 'md:border-l md:border-stone-200/80 md:pl-8' : ''
              }`}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-charcoal-900 mb-1">
                {stat.label}
              </div>
              <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
