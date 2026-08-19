import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-full px-5 sm:px-8 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-luxury border border-stone-200/70' 
            : 'bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm'
        }`}
      >
        {/* Left Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-medium text-charcoal-800/80 tracking-wide">
          <a href="#about" className="hover:text-brand-900 transition-colors">All Pages</a>
          <a href="#services" className="hover:text-brand-900 transition-colors">Services</a>
          <a href="#projects" className="hover:text-brand-900 transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-brand-900 transition-colors">Stories</a>
          <a href="#contact" className="hover:text-brand-900 transition-colors">Contact</a>
        </nav>

        {/* Center Logo */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-sm tracking-tighter">TC</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="font-serif font-bold text-lg sm:text-xl text-brand-900 tracking-tight">TileCraft</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-700 font-semibold px-1.5 py-0.5 rounded bg-brand-50 border border-brand-200/60 hidden sm:inline-block">
              Interiors
            </span>
          </div>
        </a>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-2.5">
          <a
            href="https://www.instagram.com/tilecraftinteriors/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 rounded-full bg-stone-100 hover:bg-brand-50 hover:text-brand-900 text-stone-700 text-xs font-semibold transition-colors"
            title="Tilecraft Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>

          <button
            onClick={onOpenAdmin}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors"
            title="Admin Portal"
          >
            <span>Admin</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center space-x-1.5 px-5 sm:px-6 py-2.5 rounded-full bg-brand-900 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-brand-800 hover:shadow-lg active:scale-95"
          >
            <span>Book an appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-charcoal-800 hover:bg-stone-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-stone-200/80 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col space-y-4 text-center">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-charcoal-900 hover:text-brand-900 border-b border-stone-100"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-charcoal-900 hover:text-brand-900 border-b border-stone-100"
            >
              Services & Stone Craft
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-charcoal-900 hover:text-brand-900 border-b border-stone-100"
            >
              Curated Portfolio
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-charcoal-900 hover:text-brand-900 border-b border-stone-100"
            >
              Client Stories
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-charcoal-900 hover:text-brand-900"
            >
              Contact & Studio
            </a>

            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-brand-900 text-white text-sm font-semibold flex items-center justify-center space-x-2"
              >
                <span>Book an appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.instagram.com/tilecraftinteriors/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-3.5 h-3.5 fill-current text-brand-900" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram @tilecraftinteriors</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2.5 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                <span>Admin Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
