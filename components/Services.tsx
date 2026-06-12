'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Automation',
    emoji: '🤖',
    description: 'Streamline your operations with intelligent, automated workflows that reduce manual effort.',
  },
  {
    title: 'Custom Software Development',
    emoji: '💻',
    description: 'Bespoke enterprise software tailored to your unique business needs and scalable architectures.',
  },
  {
    title: 'Web Applications',
    emoji: '🌐',
    description: 'High-performance, secure, and modern web applications built on cutting-edge stacks.',
  },
  {
    title: 'Mobile Applications',
    emoji: '📱',
    description: 'Engaging, native-feeling mobile experiences for iOS and Android platforms.',
  },
  {
    title: 'Cloud Solutions',
    emoji: '☁️',
    description: 'Secure, scalable, and resilient cloud infrastructures designed for the enterprise.',
  },
  {
    title: 'AI Agents',
    emoji: '⚡',
    description: 'Deploy autonomous AI agents to handle complex decision-making and customer interactions.',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Smart Solutions For A Smarter Tomorrow
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                <span className="mr-2 text-2xl">{service.emoji}</span>{service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
