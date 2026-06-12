'use client';

import { motion } from 'framer-motion';
import { Database, ShieldCheck, Dumbbell, Workflow, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Griffin Gym',
    tagline: 'AI Training Environment',
    description: 'A secure, scalable environment to train custom LLMs and specialized AI models on your proprietary enterprise data without risking leakage.',
    icon: <Dumbbell className="w-6 h-6 text-white" />,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Griffin Drive',
    tagline: 'Intelligent Knowledge Base',
    description: 'Vector-powered secure storage that allows your team to semantic search, query, and chat with millions of enterprise documents instantly.',
    icon: <Database className="w-6 h-6 text-white" />,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Griffin CRM',
    tagline: 'Autonomous Sales Agent',
    description: 'An AI-native CRM that automatically updates records, drafts outreach, and scores leads based on complex behavioral analysis.',
    icon: <Workflow className="w-6 h-6 text-white" />,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Custom Solutions',
    tagline: 'Tailored to your needs',
    description: 'Need something specific? Our team of AI engineers can build proprietary models and agents specifically designed for your unique workflow.',
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: 'from-gray-700 to-gray-900'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Enterprise Suite</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Powerful Products Built for Scale
            </h3>
          </div>
          <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View All Products <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 sm:p-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 shadow-lg`}>
                  {product.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm font-semibold text-primary mb-4">{product.tagline}</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
              
              {/* Subtle background glow on hover */}
              <div className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 blur-[80px] transition-opacity duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
