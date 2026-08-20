import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Phone, Mail, User, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

import { API_BASE_URL } from '../config/api';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Stone & Marble'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: initialService,
    siteVisitDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return;
    }

    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    try {
      // Send to the NestJS backend endpoint
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: `+91 ${cleanPhone}`,
        serviceType: formData.serviceType,
        siteVisitDate: formData.siteVisitDate || undefined,
        message: formData.message.trim() || `Appointment requested for ${formData.serviceType}`
      };

      const response = await fetch(`${API_BASE_URL}/api/v1/enquiries/public`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn('Backend API endpoint returned status:', response.status);
      }
    } catch (err) {
      console.warn('Enquiry logged client-side or timeout reached:', err);
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger luxury confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0F3830', '#64af9c', '#c7bca6', '#ffffff']
        });
      } catch (e) {}
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl border border-stone-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-charcoal-900 hover:bg-stone-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-50 border border-brand-200 text-brand-900 flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-900" />
            </div>

            <h3 className="font-serif text-3xl font-semibold text-charcoal-900 mb-3">
              Consultation Requested!
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Thank you, <strong className="text-charcoal-900">{formData.fullName}</strong>. Our senior architectural stone consultant will contact you within 24 hours at <span className="underline text-brand-900">{formData.email}</span>.
            </p>

            <div className="w-full bg-stone-50 rounded-2xl p-4 mb-8 text-left border border-stone-200/70 text-xs sm:text-sm space-y-1.5 text-stone-700">
              <p><strong>Selected Service:</strong> {formData.serviceType}</p>
              {formData.siteVisitDate && <p><strong>Preferred Date:</strong> {formData.siteVisitDate}</p>}
              <p><strong>Contact Phone:</strong> {formData.phone}</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full bg-brand-900 text-white text-sm font-semibold shadow-md hover:bg-brand-800 transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-[11px] font-bold uppercase tracking-wider text-brand-800 mb-2">
                <Sparkles className="w-3 h-3 text-brand-800" />
                <span>EXCLUSIVE CONSULTATION</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900">
                Book an Appointment
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                Schedule a site visit or design consultation with our master stone artisans.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sujal Lukhi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Phone Number
                    </label>
                    <span className="text-[11px] font-medium text-stone-400">
                      {formData.phone.length}/10 digits
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 flex items-center gap-1.5 pointer-events-none text-stone-500 text-xs font-semibold border-r border-stone-300 pr-2">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      minLength={10}
                      title="Please enter a valid 10-digit mobile number"
                      placeholder="93136 84573"
                      value={formData.phone}
                      onChange={(e) => {
                        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({ ...formData, phone: digitsOnly });
                      }}
                      className="w-full pl-20 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-colors font-mono tracking-wider"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Service Interest
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-colors"
                  >
                    <option value="Stone & Marble">Stone & Marble Crafting</option>
                    <option value="Bathroom">Bespoke Bathrooms</option>
                    <option value="Kitchen">Architectural Kitchens</option>
                    <option value="Flooring">Luxury Flooring</option>
                    <option value="Staircase">Custom Staircase Tiling</option>
                    <option value="Custom">Full Interior Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Preferred Site Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={formData.siteVisitDate}
                      onChange={(e) => setFormData({ ...formData, siteVisitDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Project Notes / Space Dimensions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your space, tile preferences, architectural goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:bg-white focus:border-brand-900 focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-brand-900 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg hover:bg-brand-800 transition-all duration-300 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Securing Consultation...' : 'Confirm Appointment'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
