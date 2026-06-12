'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We analyze your workflows, data silos, and bottlenecks to identify high-ROI AI opportunities.' },
  { num: '02', title: 'Strategy', desc: 'Our architects design a bespoke AI roadmap, selecting the optimal models and infrastructure.' },
  { num: '03', title: 'Design', desc: 'UI/UX teams craft intuitive interfaces ensuring your team actually adopts the new tools.' },
  { num: '04', title: 'Development', desc: 'Engineers build, train, and integrate the AI systems using our secure proprietary frameworks.' },
  { num: '05', title: 'Deployment', desc: 'Seamless rollout with zero downtime, complete with team training and documentation.' },
  { num: '06', title: 'Optimization', desc: 'Continuous monitoring, fine-tuning, and scaling as your business and data grow.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            How We Deliver Excellence
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 border-l-2 border-gray-100 hover:border-primary transition-colors duration-300 group"
            >
              {/* Dot on the line */}
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-gray-100 border-4 border-white group-hover:bg-primary transition-colors duration-300" />
              
              <div className="text-5xl font-black text-gray-100 mb-4 group-hover:text-primary/10 transition-colors duration-300">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
