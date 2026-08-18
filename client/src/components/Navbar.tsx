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
