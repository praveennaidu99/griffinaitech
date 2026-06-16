'use client';

import { motion } from 'framer-motion';

const reasons = [
  { num: '01', title: 'AI-First Approach', desc: 'We do not just bolt AI onto legacy systems. We engineer solutions natively around AI architectures.' },
  { num: '02', title: 'Fast Delivery', desc: 'Our agile frameworks and pre-built modular AI components allow us to deploy production-ready systems in weeks, not months.' },
  { num: '03', title: 'Enterprise Security', desc: 'Bank-grade encryption, SOC2 compliance readiness, and strict data isolation ensures your proprietary data never leaks.' },
  { num: '04', title: 'Scalable Architecture', desc: 'Built on modern cloud infrastructure designed to handle millions of requests and massive datasets effortlessly.' },
  { num: '05', title: 'Modern Technologies', desc: 'We utilize the absolute latest in LLMs, vector databases, and edge computing to give you an unfair advantage.' },
  { num: '06', title: 'Ongoing Support', desc: 'Dedicated engineering teams to maintain, tune, and continuously improve your AI models post-deployment.' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F3F1ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + stats */}
          <div className="lg:sticky lg:top-32">
            <span className="section-label">Why Griffin AI Tech</span>
            <h2 className="font-display leading-[0.9] tracking-[-0.02em] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)' }}>
              The Unfair<br />
              <span className="text-[#6B6A68]">Advantage.</span>
            </h2>
            <p className="text-[#6B6A68] text-lg leading-relaxed mb-10 max-w-md">
              We combine deep engineering expertise with cutting-edge AI research to build systems that actually move the needle.
            </p>

            <div className="flex flex-col sm:flex-row gap-0">
              <div className="sharp-card p-8 flex-1 text-center border-b-0 sm:border-b">
                <div className="font-display text-[2.5rem] text-[#111118] mb-1">99.9%</div>
                <div className="font-code text-[12px] text-[#6B6A68]">Uptime SLA</div>
              </div>
              <div className="sharp-card p-8 flex-1 text-center sm:border-l-0">
                <div className="font-display text-[2.5rem] text-[#111118] mb-1">10x</div>
                <div className="font-code text-[12px] text-[#6B6A68]">ROI Average</div>
              </div>
            </div>
          </div>

          {/* Right — reason cards */}
          <div className="flex flex-col gap-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="sharp-card p-8 border-b-0 last:border-b group"
                style={{ borderBottom: index < reasons.length - 1 ? 'none' : undefined }}
              >
                <div className="flex items-start gap-6">
                  <span className="font-code text-[13px] text-[#6B6A68] flex-shrink-0 mt-1">{reason.num}</span>
                  <div>
                    <h4 className="font-display text-[1.25rem] text-[#111118] mb-2">{reason.title}</h4>
                    <p className="text-[13px] text-[#6B6A68] leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
