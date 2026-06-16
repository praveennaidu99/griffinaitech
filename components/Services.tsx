'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, Code2, Globe, Smartphone, Cloud, Bot } from 'lucide-react';
import Image from 'next/image';

interface Service {
  title: string;
  category: string;
  description: string;
  gradient: string;
  accent: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
  detail: string;
  benefits: string[];
}

const services: Service[] = [
  {
    title: 'AI Automation',
    category: 'INTELLIGENCE',
    description: 'Streamline operations with intelligent, automated workflows that reduce manual effort and eliminate bottlenecks across your entire enterprise stack.',
    gradient: 'linear-gradient(160deg, #1b0a3e 0%, #0a0d2e 60%, #050818 100%)',
    accent: '#a78bfa',
    image: '/images/services/ai_automation.png',
    icon: <Brain className="w-5 h-5" />,
    features: ['Custom model training', 'Workflow orchestration', 'Real-time processing', 'Intelligent routing'],
    detail: 'Our AI automation platform connects directly to your existing stack — CRM, ERP, and databases — using intelligent connectors that require zero manual coding. Every workflow runs autonomously 24/7 with real-time monitoring and automatic error recovery built in.',
    benefits: ['Reduce manual effort by up to 80%', 'Live in days, not months', 'Works with 200+ enterprise tools'],
  },
  {
    title: 'Custom Software',
    category: 'ENGINEERING',
    description: 'Bespoke enterprise software built on scalable architectures — designed for your unique workflows, not the other way around.',
    gradient: 'linear-gradient(160deg, #002244 0%, #001528 60%, #000c1a 100%)',
    accent: '#60a5fa',
    image: '/images/services/software_dev.png',
    icon: <Code2 className="w-5 h-5" />,
    features: ['Enterprise architecture', 'API-first design', 'Zero-downtime deploys', 'Full source ownership'],
    detail: 'We architect software that scales with your business — microservices, event-driven systems, or pragmatic monoliths when that is the right call. Full source ownership, comprehensive documentation, and optional long-term support contracts are included.',
    benefits: ['Full source code & IP ownership', 'Built on your preferred cloud stack', 'Complete docs & knowledge transfer'],
  },
  {
    title: 'Web Applications',
    category: 'DESIGN & BUILD',
    description: 'High-performance, modern web applications on cutting-edge stacks — designed for speed, scale, and a seamless user experience.',
    gradient: 'linear-gradient(160deg, #12003a 0%, #0a0028 60%, #050015 100%)',
    accent: '#818cf8',
    image: '/images/services/web_apps.png',
    icon: <Globe className="w-5 h-5" />,
    features: ['Next.js & TypeScript', 'Global CDN delivery', 'Core Web Vitals optimised', 'Accessibility compliant'],
    detail: 'From marketing sites to complex SaaS dashboards, we build web apps that perform under load. Every project ships with automated testing, CI/CD pipelines, and real-time monitoring baked in from day one — not bolted on later.',
    benefits: ['Sub-second global load times', 'Automated testing & CI/CD pipelines', 'WCAG 2.1 AA accessibility compliant'],
  },
  {
    title: 'Mobile Applications',
    category: 'MOBILE',
    description: 'Engaging, native-feeling iOS and Android experiences, seamlessly integrated with your backend systems and enterprise tools.',
    gradient: 'linear-gradient(160deg, #2d0a00 0%, #1a0500 60%, #0d0300 100%)',
    accent: '#fb923c',
    image: '/images/services/mobile_apps.png',
    icon: <Smartphone className="w-5 h-5" />,
    features: ['iOS & Android native', 'Offline-first design', 'Push notifications', 'Biometric authentication'],
    detail: 'Native iOS and Android development built for the long term. We manage App Store submissions, test across 50+ device form factors, and maintain apps through every major OS release so your team can focus on the business.',
    benefits: ['App Store submission fully managed', 'Tested across 50+ real devices', 'Ongoing OS update maintenance'],
  },
  {
    title: 'Cloud Solutions',
    category: 'INFRASTRUCTURE',
    description: 'Secure, resilient cloud architectures for the enterprise — zero downtime, maximum performance, on your preferred cloud platform.',
    gradient: 'linear-gradient(160deg, #001e3c 0%, #001020 60%, #00080f 100%)',
    accent: '#38bdf8',
    image: '/images/services/cloud_solutions.png',
    icon: <Cloud className="w-5 h-5" />,
    features: ['Multi-cloud support', 'Auto-scaling infra', '99.99% uptime SLA', 'SOC 2 compliant'],
    detail: 'We design cloud architectures that balance cost, performance, and resilience from the first blueprint. Whether migrating legacy workloads or building cloud-native from scratch, every system ships with zero-downtime deployment pipelines.',
    benefits: ['Zero-downtime migration strategy', 'Infrastructure costs optimised by design', '24/7 automated monitoring & alerts'],
  },
  {
    title: 'AI Agents',
    category: 'AUTONOMOUS AI',
    description: 'Deploy autonomous agents that handle complex decisions, customer interactions, and backend workflows — without human bottlenecks.',
    gradient: 'linear-gradient(160deg, #1f0020 0%, #110012 60%, #07000a 100%)',
    accent: '#e879f9',
    image: '/images/services/ai_agents.png',
    icon: <Bot className="w-5 h-5" />,
    features: ['Autonomous reasoning', 'Tool use & APIs', 'Human-in-the-loop', 'Memory & context'],
    detail: 'Our autonomous agents reason through complex, multi-step tasks using tool calling, persistent memory, and large context windows. Deploy as API endpoints, embed into Slack or Teams, or ship as a white-label assistant inside your own product.',
    benefits: ['Deploy via API or any chat interface', 'Custom knowledge base & memory layer', 'Human escalation controls built in'],
  },
];

const HEADLINE_WORDS = 'Smart Solutions For A Smarter Tomorrow'.split(' ');
const N = services.length;

const PRESETS = [
  { xF: 0,   ry: 0,  scale: 1,    opacity: 1,    z: 10 },
  { xF: 290, ry: 36, scale: 0.85, opacity: 0.82, z: 8  },
  { xF: 460, ry: 54, scale: 0.70, opacity: 0.58, z: 6  },
  { xF: 595, ry: 68, scale: 0.56, opacity: 0.32, z: 4  },
];

function wrappedDist(index: number, active: number) {
  let d = index - active;
  if (d > N / 2)  d -= N;
  if (d < -N / 2) d += N;
  return d;
}

function getCardProps(dist: number) {
  const sign = dist >= 0 ? 1 : -1;
  const abs  = Math.abs(dist);
  if (abs >= PRESETS.length) {
    return { x: sign * 700, rotateY: sign * 80, scale: 0.44, opacity: 0, z: 0 };
  }
  const p = PRESETS[abs];
  return { x: sign * p.xF, rotateY: sign * p.ry, scale: p.scale, opacity: p.opacity, z: p.z };
}

/* ─── Card front face ───────────────────────────────────── */

function ServiceCardInner({
  service,
  onLearnMore,
}: {
  service: Service;
  onLearnMore?: () => void;
}) {
  return (
    <>
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover opacity-30 mix-blend-overlay pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.4,
        }}
      />
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${service.accent}30 0%, transparent 70%)`,
          filter: 'blur(24px)',
        }}
      />
      <div className="relative z-10 px-7 pt-7 pb-4 flex items-center gap-3">
        <div
          className="w-9 h-9 flex items-center justify-center flex-shrink-0"
          style={{
            background: `${service.accent}18`,
            border: `1px solid ${service.accent}40`,
            color: service.accent,
          }}
        >
          {service.icon}
        </div>
        <p className="font-code text-[10px] tracking-[0.22em] uppercase" style={{ color: service.accent }}>
          {service.category}
        </p>
      </div>
      <div className="relative z-10 px-7 pb-5">
        <h3 className="font-display text-[1.5rem] leading-tight text-white">{service.title}</h3>
      </div>
      <div className="mx-7 mb-5" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      <div className="relative z-10 px-7 flex-1 flex flex-col gap-[10px]">
        {service.features.map((feat) => (
          <div key={feat} className="flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
            <span className="font-code text-[11.5px] text-white/60 leading-tight">{feat}</span>
          </div>
        ))}
      </div>
      <div
        className="relative z-10 mt-auto px-7 pb-7 pt-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
      >
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onLearnMore?.(); }}
          className="flex items-center gap-1.5 font-code text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:gap-3"
          style={{ color: service.accent, cursor: 'pointer' }}
        >
          <span>Learn more</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </>
  );
}

/* ─── Card back face ────────────────────────────────────── */

function ServiceCardBack({ service, onBack }: { service: Service; onBack: () => void }) {
  return (
    <div className="w-full h-full relative flex flex-col" style={{ background: service.gradient }}>
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.4,
        }}
      />
      {/* Accent glow */}
      <div
        className="absolute -top-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${service.accent}30 0%, transparent 70%)`,
          filter: 'blur(24px)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-7 pt-7 pb-7">
        {/* Category + title */}
        <p className="font-code text-[10px] tracking-[0.22em] uppercase mb-2" style={{ color: service.accent }}>
          {service.category}
        </p>
        <h3 className="font-display text-[1.3rem] leading-tight text-white mb-4">{service.title}</h3>

        <div className="mb-4" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

        {/* Detail text */}
        <p className="text-white/65 text-[11.5px] leading-relaxed mb-5">
          {service.detail}
        </p>

        {/* Benefits */}
        <div className="flex flex-col gap-2.5 flex-1">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2.5">
              <span
                className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-px text-[9px] font-bold"
                style={{
                  background: `${service.accent}20`,
                  border: `1px solid ${service.accent}50`,
                  color: service.accent,
                }}
              >
                ✓
              </span>
              <span className="font-code text-[11px] text-white/65 leading-snug">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div
          className="flex items-center pt-4 mt-auto"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 font-code text-[11px] tracking-[0.10em] uppercase text-white/40 hover:text-white/70 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Flip wrapper shared styles ────────────────────────── */

const flipFaceStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  overflow: 'hidden',
};

/* ─── Services section ──────────────────────────────────── */

export default function Services() {
  const [active, setActive] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const pendingFlip = useRef<number | null>(null);
  const pointerStartX = useRef(0);
  const wheelCooldown = useRef(false);
  const wheelAccum = useRef(0);

  useEffect(() => {
    if (pendingFlip.current !== null && pendingFlip.current === active) {
      const pending = pendingFlip.current;
      pendingFlip.current = null;
      const timer = setTimeout(() => setFlippedIndex(pending), 400);
      return () => clearTimeout(timer);
    } else {
      setFlippedIndex(null);
    }
  }, [active]);

  function goTo(i: number) {
    setActive(((i % N) + N) % N);
  }

  function handleLearnMore(index: number) {
    if (index === active) {
      setFlippedIndex(index);
    } else {
      pendingFlip.current = index;
      goTo(index);
    }
  }

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    if (wheelCooldown.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    wheelAccum.current += delta;
    if (Math.abs(wheelAccum.current) > 50) {
      goTo(active + (wheelAccum.current > 0 ? 1 : -1));
      wheelAccum.current = 0;
      wheelCooldown.current = true;
      setTimeout(() => { wheelCooldown.current = false; }, 420);
    }
  }

  return (
    <section id="services" className="py-24 bg-[#FAF9F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="section-label">Our Services</span>
            <h2
              className="font-display leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', perspective: '700px' }}
            >
              {HEADLINE_WORDS.slice(0, 2).map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, rotateX: 75, y: 28 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.70, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'inline-block', transformOrigin: 'top center', marginRight: '0.25em', color: '#111118' }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {HEADLINE_WORDS.slice(2).map((word, i) => (
                <motion.span
                  key={i + 2}
                  initial={{ opacity: 0, rotateX: 75, y: 28 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.70, delay: (i + 2) * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'inline-block',
                    transformOrigin: 'top center',
                    marginRight: i < HEADLINE_WORDS.slice(2).length - 1 ? '0.25em' : 0,
                    color: '#6B6A68',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-[#6B6A68] text-lg leading-relaxed">
              From intelligent automation to full-stack development, we engineer solutions natively built around AI — not bolted on as an afterthought.
            </p>
          </div>
        </div>

        {/* ── Mobile / tablet: swipeable single-card view (below md) ── */}
        <div
          className="md:hidden relative"
          style={{ height: 420, touchAction: 'pan-y' }}
          onTouchStart={(e) => { pointerStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - pointerStartX.current;
            if (Math.abs(diff) > 40) goTo(active + (diff < 0 ? 1 : -1));
          }}
          onPointerDown={(e) => { pointerStartX.current = e.clientX; }}
          onPointerUp={(e) => {
            const diff = e.clientX - pointerStartX.current;
            if (Math.abs(diff) > 40) goTo(active + (diff < 0 ? 1 : -1));
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Flip container */}
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: flippedIndex === active ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* Front */}
                <div style={{ ...flipFaceStyle, background: services[active].gradient }} className="flex flex-col">
                  <ServiceCardInner
                    service={services[active]}
                    onLearnMore={() => handleLearnMore(active)}
                  />
                </div>
                {/* Back */}
                <div style={{ ...flipFaceStyle, transform: 'rotateY(180deg)' }}>
                  <ServiceCardBack service={services[active]} onBack={() => setFlippedIndex(null)} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Desktop: 3D Fan Carousel (md+) ── */}
        <div
          className="hidden md:flex relative items-center justify-center select-none"
          style={{ height: 510, perspective: '1400px' }}
          onWheel={handleWheel}
          onPointerDown={(e) => { pointerStartX.current = e.clientX; }}
          onPointerUp={(e) => {
            const diff = e.clientX - pointerStartX.current;
            if (Math.abs(diff) > 48) goTo(active + (diff < 0 ? 1 : -1));
          }}
        >
          {services.map((service, index) => {
            const dist = wrappedDist(index, active);
            const { x, rotateY, scale, opacity, z } = getCardProps(dist);
            const isActive = dist === 0;
            const isFlipped = flippedIndex === index;

            return (
              <motion.div
                key={service.title}
                animate={{ x, rotateY, scale, opacity }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                style={{
                  position: 'absolute',
                  width: 300,
                  height: 470,
                  zIndex: z,
                  transformOrigin: 'center center',
                }}
              >
                {/* Flip container */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>
                  {/* Front face */}
                  <div style={flipFaceStyle}>
                    <div
                      className="w-full h-full relative flex flex-col"
                      style={{
                        background: service.gradient,
                        border: '1px solid rgba(255,255,255,0.07)',
                        cursor: !isActive ? 'pointer' : 'default',
                      }}
                      onClick={() => { if (!isActive) goTo(index); }}
                    >
                      <ServiceCardInner
                        service={service}
                        onLearnMore={() => handleLearnMore(index)}
                      />
                    </div>
                  </div>

                  {/* Back face */}
                  <div style={{ ...flipFaceStyle, transform: 'rotateY(180deg)' }}>
                    <ServiceCardBack service={service} onBack={() => setFlippedIndex(null)} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Description + navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-14">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="text-[#6B6A68] text-base leading-relaxed max-w-lg"
            >
              {services[active].description}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-col items-end gap-4 shrink-0">
            <span className="font-code text-[13px] text-[#6B6A68]">
              {String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center text-[#6B6A68] hover:text-[#111118] hover:border-[rgba(17,17,24,0.3)] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center text-[#6B6A68] hover:text-[#111118] hover:border-[rgba(17,17,24,0.3)] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress pills */}
        <div className="flex items-center gap-2 mt-6">
          {services.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === active ? 'w-10 bg-[#111118]' : 'w-4 bg-[#E5E2DC] hover:bg-[#6B6A68]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
