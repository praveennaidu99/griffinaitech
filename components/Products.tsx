'use client';

import { motion } from 'framer-motion';
import { Database, ShieldCheck, Dumbbell, Workflow, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'Griffin Gym',
    tagline: 'AI Training Environment',
    description: 'Train custom LLMs and specialised models on your proprietary enterprise data in a fully isolated, secure environment.',
    features: ['Custom model fine-tuning', 'Private data isolation', 'Zero leakage guarantee'],
    Icon: Dumbbell,
    accent: '#7c3aed',
    accentBg: 'rgba(124,58,237,0.07)',
    num: '01',
  },
  {
    name: 'Griffin Drive',
    tagline: 'Intelligent Knowledge Base',
    description: 'Vector-powered semantic search — your team can query, summarise, and extract insights from millions of documents instantly.',
    features: ['Semantic & keyword search', 'Chat with your documents', 'Role-based access control'],
    Icon: Database,
    accent: '#2563eb',
    accentBg: 'rgba(37,99,235,0.07)',
    num: '02',
  },
  {
    name: 'Griffin CRM',
    tagline: 'Autonomous Sales Agent',
    description: 'An AI-native CRM that auto-updates records, scores leads, and drafts personalised outreach based on real behavioural signals.',
    features: ['AI lead scoring', 'Auto-drafted outreach', 'Pipeline automation'],
    Icon: Workflow,
    accent: '#059669',
    accentBg: 'rgba(5,150,105,0.07)',
    num: '03',
  },
  {
    name: 'Custom Build',
    tagline: 'Tailored to Your Workflow',
    description: 'Proprietary models and agents engineered from scratch around your unique operational requirements and data architecture.',
    features: ['Bespoke model architecture', 'Full IP ownership', 'Dedicated engineering team'],
    Icon: ShieldCheck,
    accent: '#b45309',
    accentBg: 'rgba(180,83,9,0.07)',
    num: '04',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#FAF9F7] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header — same 2-col pattern as other sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="section-label">Enterprise Suite</span>
            <h2
              className="font-display leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)' }}
            >
              Purpose-built<br />
              <span className="text-[#6B6A68]">AI products.</span>
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="text-[#6B6A68] text-lg leading-relaxed">
              Trained on your data, deployed on your terms, owned by you — the enterprise AI stack you actually need.
            </p>
          </div>
        </div>

        {/* 2×2 grid — gap-px trick creates clean #E5E2DC dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white hover:bg-[#FDFCFA] transition-colors duration-300 p-10 flex flex-col gap-6"
            >
              {/* Icon + number row */}
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: product.accentBg }}
                >
                  <product.Icon
                    className="w-6 h-6"
                    style={{ color: product.accent }}
                  />
                </div>
                <span className="font-code text-[13px] text-[#6B6A68]">{product.num}</span>
              </div>

              {/* Name + tagline */}
              <div>
                <h4 className="font-display text-[1.6rem] text-[#111118] leading-tight mb-1.5">
                  {product.name}
                </h4>
                <p
                  className="font-code text-[12px] tracking-wide"
                  style={{ color: product.accent }}
                >
                  {product.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-[#6B6A68] text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-[#6B6A68]">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: product.accent }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-4 border-t border-[#E5E2DC] mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-code text-[13px] text-[#111118] hover:gap-3 transition-all duration-200 group-hover:text-[#111118]"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — same as other sections */}
        <div className="mt-12 pt-8 border-t border-[#E5E2DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-code text-[13px] text-[#6B6A68]">
            All products include SOC 2 compliance, 99.9% uptime SLA, and dedicated support.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111118] text-[#FAF9F7] text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Get a demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
