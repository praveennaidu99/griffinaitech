'use client';

import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary w-5 h-5" />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-gray-900">
                Griffin AI Tech
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
              Pioneering the future of enterprise automation through intelligent, secure, and highly scalable AI systems.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">AI Agents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Griffin AI Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
