'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', subtitle: 'your landscape', desc: 'We analyze your workflows, data silos, and bottlenecks to identify high-ROI AI opportunities.' },
  { num: '02', title: 'Strategy', subtitle: 'the roadmap', desc: 'Our architects design a bespoke AI roadmap, selecting the optimal models and infrastructure.' },
  { num: '03', title: 'Design', subtitle: 'the experience', desc: 'UI/UX teams craft intuitive interfaces ensuring your team actually adopts the new tools.' },
  { num: '04', title: 'Build', subtitle: 'the system', desc: 'Engineers build, train, and integrate the AI systems using our secure proprietary frameworks.' },
  { num: '05', title: 'Deploy', subtitle: '& go live', desc: 'Seamless rollout with zero downtime, complete with team training and documentation.' },
  { num: '06', title: 'Optimise', subtitle: 'continuously', desc: 'Continuous monitoring, fine-tuning, and scaling as your business and data grow.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="section-label">Our Process</span>
            <h2 className="font-display leading-[0.85] tracking-[-0.02em]" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
              <span className="text-[#111118] block">Define.</span>
              <span className="text-[rgba(17,17,24,0.35)] block">Deploy.</span>
              <span className="text-[rgba(17,17,24,0.15)] block">Scale.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-[#6B6A68] text-lg leading-relaxed">
              A proven six-step process from discovery to continuous optimisation — so every deployment delivers real, measurable value.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="sharp-card p-10 group hover:border-[rgba(17,17,24,0.15)] transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-[2.5rem] text-primary">{step.num}</span>
                <div className="flex-1 h-px bg-[#E5E2DC] group-hover:bg-[rgba(17,17,24,0.08)] transition-colors" />
              </div>
              <h4 className="font-display text-[2rem] text-[#111118] mb-1">{step.title}</h4>
              <span className="font-display text-[1.1rem] text-[#6B6A68] block mb-5">{step.subtitle}</span>
              <p className="text-[13px] text-[#6B6A68] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
