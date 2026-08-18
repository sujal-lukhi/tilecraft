import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-950 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-brand-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-800 flex items-center justify-center text-white font-serif font-bold text-base shadow-sm">
                TC
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">TileCraft Interiors</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Pioneers in luxury interior architecture, Italian marble bookmatching, bespoke bathroom suites, and master tile craftsmanship since 1993.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4">Architecture</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Stone & Marble</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Bathrooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Architectural Floors</a></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4">Portfolio</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Residential Estates</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Commercial Towers</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Testimonials</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Before & After Showcase</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Material Catalog</a></li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4">Studio</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>+91 9313684573</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>tilecraftinteriors1@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} TileCraft Interiors Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Craftsmanship</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
