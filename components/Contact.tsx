'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@griffinaitech.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _template: 'box',
          _subject: 'New Contact Form Submission - Griffin AI Tech',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F7] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="font-display leading-[0.9] tracking-[-0.02em] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              Ready to<br />
              <span className="text-[#6B6A68]">Accelerate?</span>
            </h2>
            <p className="text-[#6B6A68] text-lg leading-relaxed mb-12 max-w-md">
              Schedule a consultation with our AI engineers to discuss how we can automate your workflows and build your proprietary intelligence system.
            </p>

            <div className="space-y-6">
              <a href="mailto:info@griffinaitech.com" className="flex items-center gap-5 text-[#6B6A68] hover:text-[#111118] transition-colors group">
                <div className="w-12 h-12 border border-[#E5E2DC] flex items-center justify-center group-hover:border-[rgba(17,17,24,0.2)] transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#111118]">Email Us</div>
                  <div className="font-code text-[13px]">info@griffinaitech.com</div>
                </div>
              </a>

              <a href="tel:+15550000000" className="flex items-center gap-5 text-[#6B6A68] hover:text-[#111118] transition-colors group">
                <div className="w-12 h-12 border border-[#E5E2DC] flex items-center justify-center group-hover:border-[rgba(17,17,24,0.2)] transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#111118]">Call Us</div>
                  <div className="font-code text-[13px]">+91 9700437350</div>
                </div>
              </a>


            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sharp-card p-10"
          >
            {status === 'success' && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium rounded-lg mb-6">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium rounded-lg mb-6">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">How can we help?</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-[#111118] text-[#FAF9F7] font-medium text-sm hover:opacity-85 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
