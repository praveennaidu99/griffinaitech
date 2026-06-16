'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? 'top-4 left-4 right-4'
          : 'top-0 left-0 right-0'
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'glass rounded-2xl mx-auto'
            : 'bg-transparent'
        }`}
        style={{ maxWidth: scrolled ? '1200px' : 'none', margin: scrolled ? '0 auto' : undefined }}
      >
        <div className={`flex items-center justify-between px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
          <Link href="/" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Griffin AI Tech logo"
              style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '8px' }}
            />
            <span className="font-display font-normal text-xl tracking-tight text-[#111118]">
              Griffin AI Tech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#6B6A68] hover:text-[#111118] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="#contact"
              className="font-medium text-sm px-5 py-2 rounded-full bg-[#111118] text-[#FAF9F7] hover:opacity-85 transition-opacity"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#6B6A68] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 glass rounded-2xl py-4 px-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#111118] hover:text-primary block py-2"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center font-medium px-6 py-3 rounded-full bg-[#111118] text-[#FAF9F7] hover:opacity-85 transition-opacity mt-2"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
