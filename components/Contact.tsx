'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
              <a href="mailto:hello@griffinai.tech" className="flex items-center gap-5 text-[#6B6A68] hover:text-[#111118] transition-colors group">
                <div className="w-12 h-12 border border-[#E5E2DC] flex items-center justify-center group-hover:border-[rgba(17,17,24,0.2)] transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#111118]">Email Us</div>
                  <div className="font-code text-[13px]">hello@griffinai.tech</div>
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

              <div className="flex items-center gap-5 text-[#6B6A68]">
                <div className="w-12 h-12 border border-[#E5E2DC] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#111118]">Visit Us</div>
                  <div className="font-code text-[13px]">100 Innovation Drive, Silicon Valley, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sharp-card p-10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">Work Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block font-code text-[12px] text-[#6B6A68] mb-2 uppercase tracking-wider">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E5E2DC] bg-transparent text-[#111118] placeholder-[#9B9A98] focus:border-[rgba(17,17,24,0.4)] focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[#111118] text-[#FAF9F7] font-medium text-sm hover:opacity-85 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
