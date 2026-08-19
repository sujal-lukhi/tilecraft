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
              <a 
                href="https://www.instagram.com/tilecraftinteriors/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-700 flex items-center justify-center text-white transition-colors"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
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
                <svg className="w-4 h-4 fill-brand-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://www.instagram.com/tilecraftinteriors/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @tilecraftinteriors
                </a>
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
