import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutGallery } from './components/AboutGallery';
import { StatsSection } from './components/StatsSection';
import { TestimonialSplit } from './components/TestimonialSplit';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { DreamHomeCTA } from './components/DreamHomeCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminPortal } from './components/AdminPortal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Stone & Marble');

  const handleOpenBooking = (service = 'Stone & Marble') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-marble-luxury text-charcoal-900 selection:bg-brand-900 selection:text-white relative">
      {/* Top Floating Pill Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking('Stone & Marble')} 
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('Stone & Marble')} />

        {/* About & 4-Card Curated Masonry Gallery */}
        <AboutGallery />

        {/* Impact Numbers / Stats Bar */}
        <StatsSection />

        {/* Split Forest Emerald Testimonials & Luxury Interior */}
        <TestimonialSplit />

        {/* Before & After Interactive Renovation Slider */}
        <BeforeAfterSlider />

        {/* Specialized Services */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* "Get your dream home with expert help" CTA & Project Row */}
        <DreamHomeCTA onOpenBooking={() => handleOpenBooking('Custom')} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Consultation / Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />

      {/* Admin Dashboard & Customer Appointment Manager */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
};

export default App;
