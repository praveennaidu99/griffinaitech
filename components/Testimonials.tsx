'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-8">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={test.image} alt={test.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">{test.author}</h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
