import React from 'react';
import { SERVICES } from '../data/mockData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-100/50 rounded-[3rem] my-8 border border-stone-200/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-800 mb-3">
            OUR EXPERTISE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight">
            Specialized Craftsmanship & <br className="hidden sm:inline" />
            Architectural Solutions
          </h2>
        </div>
        <p className="text-stone-600 text-sm sm:text-base max-w-md">
          From rare Italian marble bookmatching to high-precision waterproof micro-tiling, our master artisans bring perfection to every square inch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group rounded-3xl bg-white border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-brand-900">
                {service.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs sm:text-[13px] text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-900 group-hover:text-brand-700 transition-colors pt-4 border-t border-stone-100"
              >
                <span>Inquire for {service.title}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
