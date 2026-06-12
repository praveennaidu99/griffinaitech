'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  { title: 'AI-First Approach', desc: 'We do not just bolt AI onto legacy systems. We engineer solutions natively around AI architectures.' },
  { title: 'Fast Delivery', desc: 'Our agile frameworks and pre-built modular AI components allow us to deploy production-ready systems in weeks, not months.' },
  { title: 'Enterprise Security', desc: 'Bank-grade encryption, SOC2 compliance readiness, and strict data isolation ensures your proprietary data never leaks.' },
  { title: 'Scalable Architecture', desc: 'Built on modern cloud infrastructure designed to handle millions of requests and massive datasets effortlessly.' },
  { title: 'Modern Technologies', desc: 'We utilize the absolute latest in LLMs, vector databases, and edge computing to give you an unfair advantage.' },
  { title: 'Ongoing Support', desc: 'Dedicated engineering teams to maintain, tune, and continuously improve your AI models post-deployment.' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Dark background but with our purple accent glowing */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Why Griffin AI Tech</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The Unfair Advantage for Modern Enterprises
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We combine deep engineering expertise with cutting-edge AI research to build systems that actually move the needle. Stop experimenting with toy bots and start deploying real enterprise value.
            </p>
            
            <div className="flex gap-4">
              <div className="glass-card !bg-white/5 !border-white/10 p-6 flex-1 text-center">
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div className="glass-card !bg-white/5 !border-white/10 p-6 flex-1 text-center">
                <div className="text-3xl font-bold text-white mb-1">10x</div>
                <div className="text-sm text-gray-400">ROI Average</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
