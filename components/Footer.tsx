'use client';

import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1917]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="text-primary w-5 h-5" />
                </div>
                <span className="font-display text-xl text-[#e8edf5]">
                  Griffin AI Tech
                </span>
              </Link>
              <p className="text-[13px] text-[rgba(232,237,245,0.4)] leading-relaxed max-w-xs mb-8">
                Pioneering the future of enterprise automation through intelligent, secure, and highly scalable AI systems.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Twitter</a>
                <a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">GitHub</a>
                <a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[13px] font-medium text-[#e8edf5] mb-5">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">AI Automation</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Software Development</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">AI Agents</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[13px] font-medium text-[#e8edf5] mb-5">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Careers</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Blog</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[13px] font-medium text-[#e8edf5] mb-5">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-[13px] text-[rgba(232,237,245,0.4)] hover:text-[#e8edf5] transition-colors">Security</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[rgba(232,237,245,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-code text-[13px] text-[rgba(232,237,245,0.3)]">
            © {new Date().getFullYear()} Griffin AI Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-code text-[13px] text-[rgba(232,237,245,0.3)]">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
