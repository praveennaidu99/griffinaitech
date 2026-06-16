'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Zap } from 'lucide-react';

interface Site {
  id: string;
  name: string;
  type: string;
  desc: string;
  features: string[];
  url: string;
  thumb: { bg: string; accent: string; dark: boolean };
}

const premiumSites: Site[] = [
  {
    id: 'compute',
    name: 'Griffin Ai tech',
    type: 'AI Agents Platform',
    desc: 'Cinematic platform landing page for autonomous AI agents with distributed computing, real-time metrics, and animated particle visualizations.',
    features: ['Blur-word hero animation', 'Canvas particle & dot graphs', 'Live metrics dashboard'],
    url: '/demos/compute.html',
    thumb: { bg: '#0a0b10', accent: '#eca8d6', dark: true },
  },
  {
    id: 'sarab',
    name: 'Sarab',
    type: 'Restaurant & Food',
    desc: 'Full-featured restaurant website with online menu, table reservations, gallery, and chef profiles.',
    features: ['Interactive menu with popups', 'Table reservation system', 'Photo gallery & chef profiles'],
    url: '/demos/sarab/index.html',
    thumb: { bg: '#1a0a00', accent: '#e8a020', dark: true },
  },
  {
    id: 'boty',
    name: 'Boty',
    type: 'Natural Skincare E-Commerce',
    desc: 'Luxury natural skincare store with video hero, product category filter, bento-grid feature section, and infinite-scroll testimonials.',
    features: ['Video hero with blur-in animations', 'Product grid with category filter', 'Bento-grid & scrolling testimonials'],
    url: '/demos/boty.html',
    thumb: { bg: '#F7F4EF', accent: '#4F5B3A', dark: false },
  },
  {
    id: 'amberfolio',
    name: 'Elara Studio',
    type: 'Creative Portfolio',
    desc: 'Dark premium portfolio for creative agencies with animated hero, project gallery, and pricing tiers.',
    features: ['Animated geometric hero', 'Portfolio gallery with hover overlays', 'Services & pricing cards'],
    url: '/demos/amberfolio/index.html',
    thumb: { bg: '#FAF8F4', accent: '#C8820A', dark: false },
  },
  {
    id: 'corpedge',
    name: 'CorpEdge',
    type: 'Corporate SaaS',
    desc: 'Enterprise-grade dashboard and client portal with real-time analytics.',
    features: ['Interactive dashboards', 'CRM integration', 'Role-based access portals'],
    url: '/demos/corpedge.html',
    thumb: { bg: '#EEF2FF', accent: '#4F46E5', dark: false },
  },
];

const standardSites: Site[] = [
  {
    id: 'swiftbiz',
    name: 'SwiftBiz',
    type: 'Business Landing',
    desc: 'Clean, conversion-optimised business website with contact forms and maps.',
    features: ['Contact forms & enquiries', 'Google Maps integration', 'Mobile-first design'],
    url: '/demos/swiftbiz.html',
    thumb: { bg: '#ECFDF5', accent: '#059669', dark: false },
  },
  {
    id: 'shopstart',
    name: 'ShopStart',
    type: 'Small E-Commerce',
    desc: 'Simple, effective online store for small businesses and retailers.',
    features: ['Product catalogue', 'WhatsApp integration', 'Easy checkout'],
    url: '/demos/shopstart.html',
    thumb: { bg: '#FFF7ED', accent: '#EA580C', dark: false },
  },
  {
    id: 'profoliopro',
    name: 'ProfolioPro',
    type: 'Portfolio / Agency',
    desc: 'Creative portfolio with project gallery, testimonials, and booking.',
    features: ['Project gallery', 'Client testimonials', 'Booking widget'],
    url: '/demos/profoliopro.html',
    thumb: { bg: '#0F172A', accent: '#7C3AED', dark: true },
  },
  {
    id: 'medvault',
    name: 'MedVault',
    type: 'Healthcare Portal',
    desc: 'Modern healthcare patient portal with appointment booking, medical records, and doctor profiles.',
    features: ['Appointment scheduling', 'Patient records dashboard', 'Doctor directory & profiles'],
    url: '/demos/medvault.html',
    thumb: { bg: '#EFF6FF', accent: '#2563EB', dark: false },
  },
  {
    id: 'luxecommerce',
    name: 'LuxeCommerce',
    type: 'Luxury E-Commerce',
    desc: 'Premium luxury shopping experience with editorial product presentation, curated collections, and immersive visuals.',
    features: ['Editorial product layouts', 'Curated collections & lookbooks', 'Newsletter & loyalty integration'],
    url: '/demos/luxecommerce.html',
    thumb: { bg: '#111111', accent: '#D4AF37', dark: true },
  },
];

function SiteThumbnail({ site }: { site: Site }) {
  return (
    <div
      className="w-full overflow-hidden relative bg-[#111827] border-b border-[#E5E2DC]"
      style={{ height: '220px' }}
    >
      <iframe
        src={site.url}
        title={`${site.name} preview`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400%',
          height: '880px',
          transform: 'scale(0.25)',
          transformOrigin: 'top left',
          pointerEvents: 'none',
          border: 'none',
        }}
        loading="lazy"
        tabIndex={-1}
      />
    </div>
  );
}

function SiteCard({ site, tier }: { site: Site; tier: 'premium' | 'standard' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sharp-card overflow-hidden hover:border-[rgba(17,17,24,0.15)] transition-all duration-300 flex flex-col"
    >
      <SiteThumbnail site={site} />

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display text-[1.25rem] text-[#111118] leading-tight">{site.name}</h3>
            <p className="font-code text-[12px] text-[#6B6A68] mt-1">{site.type}</p>
          </div>
          <span className="font-code text-[11px] px-3 py-1 border border-[#E5E2DC] text-[#6B6A68] whitespace-nowrap">
            {tier === 'premium' ? '⚡ Premium' : '◇ Standard'}
          </span>
        </div>

        <p className="text-[#6B6A68] text-sm leading-relaxed mb-5">{site.desc}</p>

        <ul className="space-y-2 mb-8 flex-1">
          {site.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#6B6A68]">
              <span className="text-primary flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#111118] text-[#FAF9F7] text-sm font-medium text-center hover:opacity-85 transition-opacity block"
        >
          View Live Demo →
        </a>
      </div>
    </motion.div>
  );
}

export default function WebsiteShowcase() {
  const [activeTab, setActiveTab] = useState<'premium' | 'standard'>('premium');

  const sites = activeTab === 'premium' ? premiumSites : standardSites;

  return (
    <section className="py-24 bg-[#F3F1ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="section-label">Our Website Portfolio</span>
            <h2 className="font-display leading-[0.9] tracking-[-0.02em]" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              Websites We<br />
              <span className="text-[#6B6A68]">Build for Clients.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-[#6B6A68] text-lg leading-relaxed">
              Explore real demos of the websites we create — click any card to experience it live, just like your customers would.
            </p>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex mb-10">
          <div className="inline-flex items-center sharp-card p-1 gap-0">
            <button
              onClick={() => setActiveTab('premium')}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all duration-200 ${activeTab === 'premium'
                ? 'bg-[#111118] text-[#FAF9F7]'
                : 'text-[#6B6A68] hover:text-[#111118]'
                }`}
            >
              <Crown className="w-4 h-4" />
              Premium
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all duration-200 ${activeTab === 'standard'
                ? 'bg-[#111118] text-[#FAF9F7]'
                : 'text-[#6B6A68] hover:text-[#111118]'
                }`}
            >
              <Zap className="w-4 h-4" />
              Standard
            </button>
          </div>
        </div>

        {/* Tab description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="font-code text-[13px] text-[#6B6A68] mb-10"
          >
            {activeTab === 'premium'
              ? 'High-end, feature-rich websites with advanced animations, integrations, and custom functionality.'
              : 'Clean, professional websites built fast — perfect for small businesses, startups, and portfolios.'}
          </motion.p>
        </AnimatePresence>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                tier={activeTab}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 pt-10 border-t border-[#E5E2DC] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-code text-[13px] text-[#6B6A68]">Want a website like one of these?</p>
          <a href="#contact" className="px-6 py-3 bg-[#111118] text-[#FAF9F7] text-sm font-medium hover:opacity-85 transition-opacity rounded-full">
            Get a Free Quote →
          </a>
        </div>
      </div>

    </section>
  );
}
