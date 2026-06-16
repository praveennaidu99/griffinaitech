'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Griffin AI Tech completely transformed our data processing pipeline. What used to take our analysts 3 weeks now happens automatically in real-time. Unbelievable ROI.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Global",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "We were worried about data privacy with LLMs. Griffin built us a custom, air-gapped solution that securely runs on our own servers. Highly recommended.",
    author: "Marcus Chen",
    role: "VP Engineering, SecureHealth",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The autonomous sales agent they deployed integrated seamlessly with our legacy CRM. Our lead conversion rate jumped 40% in the first quarter.",
    author: "Elena Rodriguez",
    role: "Director of Sales, Apex Corp",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F3F1ED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="section-label">Client Success</span>
          </div>
          <div className="lg:pb-4">
            <p className="text-[#6B6A68] text-lg leading-relaxed">
              Real results from real enterprises. Our clients don't just adopt AI — they lead with it.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sharp-card p-10 flex flex-col justify-between border-b-0 last:border-b md:border-b md:border-r-0 md:last:border-r"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="font-display text-[1.1rem] text-[#111118] leading-relaxed mb-10">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-[#E5E2DC]">
                <img src={test.image} alt={test.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111118]">{test.author}</h4>
                  <p className="font-code text-[12px] text-[#6B6A68]">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
