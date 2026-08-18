import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RECENT_WORKS } from '../data/mockData';

interface DreamHomeCTAProps {
  onOpenBooking: () => void;
}

export const DreamHomeCTA: React.FC<DreamHomeCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <div className="bg-[#FAF9F6] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-14 border border-stone-200/90 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-800 mb-3">
            START YOUR JOURNEY
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight">
            Get your dream home <br />
            with expert help.
          </h2>
        </div>

        <div>
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-brand-900 text-white text-sm sm:text-base font-medium shadow-lg hover:bg-brand-800 transition-all duration-300 hover:shadow-xl active:scale-95"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* 3-card preview row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECENT_WORKS.map((work, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-200 block mb-1">
                {work.category}
              </span>
              <h3 className="font-serif text-xl font-medium text-white mb-1">
                {work.title}
              </h3>
              <span className="text-xs text-stone-300">
                {work.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
