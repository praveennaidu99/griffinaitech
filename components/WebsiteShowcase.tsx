'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Crown, Zap } from 'lucide-react';

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
    name: 'COMPUTE',
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
  {
    id: 'cosmicvoyage',
    name: 'CosmicVoyage',
    type: 'Space / Cinematic',
    desc: 'Cinematic space-travel landing page with looping video backgrounds, liquid-glass UI, and word-by-word blur animations.',
    features: ['Cinematic video crossfade', 'Liquid-glass design system', 'Framer Motion hero animations'],
    url: '/demos/cosmicvoyage.html',
    thumb: { bg: '#000000', accent: '#818cf8', dark: true },
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
];

function SiteThumbnail({ site }: { site: Site }) {
  return (
    <div
      className="w-full rounded-t-xl overflow-hidden relative bg-gray-100"
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
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <SiteThumbnail site={site} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{site.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{site.type}</p>
          </div>
          {tier === 'premium' ? (
            <span className="flex items-center gap-1 bg-amber-50 text-amber-600 border border-amber-200 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
              <Crown className="w-3 h-3" />
              Premium
            </span>
          ) : (
            <span className="flex items-center gap-1 bg-gray-50 text-gray-500 border border-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
              <Zap className="w-3 h-3" />
              Standard
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">{site.desc}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {site.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-primary text-center text-sm py-3 block"
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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">Our Website Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Websites We Build for<br />
            <span className="text-gradient">Our Clients</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore real demos of the websites we create — click any card to experience it live, just like your customers would.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-white rounded-xl p-1.5 border border-gray-200 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('premium')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'premium'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Crown className="w-4 h-4" />
              Premium Websites
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'standard'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Zap className="w-4 h-4" />
              Standard Websites
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
            className="text-center text-sm text-gray-500 mb-10"
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
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Want a website like one of these?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Get a Free Quote →
          </a>
        </div>
      </div>

    </section>
  );
}
