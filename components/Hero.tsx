'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Bot } from 'lucide-react';

declare module 'framer-motion' {
  interface MotionProps {
    className?: string;
    key?: React.Key;
  }
}

/* ─── Cycling blur-word animation ──────────────────────── */

const CYCLE_WORDS = ['Works.', 'Scales.', 'Learns.', 'Adapts.'];

function CyclingWord() {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx(i => (i + 1) % CYCLE_WORDS.length);
      setAnimKey(k => k + 1);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ display: 'inline' }}>
      {CYCLE_WORDS[idx].split('').map((ch, i) => (
        <motion.span
          key={`${animKey}-${i}`}
          initial={{ opacity: 0, filter: 'blur(18px)', color: '#7c3aed' }}
          animate={{ opacity: 1, filter: 'blur(0px)', color: '#111118' }}
          transition={{ delay: i * 0.045, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          style={{ display: 'inline-block' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Types & data ──────────────────────────────────────── */

interface CardData {
  id: string;
  label: string;
  value: string;
  subtitle: string;
  pos: React.CSSProperties;
  floatDelay: number;
}

const CARDS: CardData[] = [
  { id: 'tl', label: 'AI Agents',    value: '150+',  subtitle: 'Active deployments',  pos: { top: '10%',    left: '-58px' },  floatDelay: 0   },
  { id: 'tr', label: 'Satisfaction', value: '98%',   subtitle: 'Client satisfaction', pos: { top: '10%',    right: '-58px' }, floatDelay: 1.0 },
  { id: 'bl', label: 'Workflows',    value: '2.3M+', subtitle: 'Automated monthly',   pos: { bottom: '22%', left: '-58px' },  floatDelay: 0.5 },
  { id: 'br', label: 'Uptime',       value: '99.9%', subtitle: 'System reliability',  pos: { bottom: '22%', right: '-58px' }, floatDelay: 1.5 },
];

const METRICS = [
  { value: '150+', label: 'AI Deployments' },
  { value: '98%',  label: 'Customer Retention' },
  { value: '24/7', label: 'AI Operations' },
];

/* ─── Shared glass style ────────────────────────────────── */

const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.88)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderRadius: '24px',
  border: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 20px 60px rgba(124,58,237,0.15), 0 4px 16px rgba(0,0,0,0.08)',
};

/* ─── Floating stat card ────────────────────────────────── */
/*
  Cards are absolute-positioned relative to the video wrapper div.
  They sit OUTSIDE the video horizontally (left/right: -60px) but are
  vertically within the wrapper bounds (top/bottom: %) so they frame
  the Griffin without covering its face or wings.
*/
function StatCard({ card, entryDelay }: { card: CardData; entryDelay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.86 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0, 8, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: entryDelay },
        scale: { duration: 0.55, delay: entryDelay, ease: [0.16, 1, 0.3, 1] },
        y: {
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: entryDelay + 0.6 + card.floatDelay,
        },
      }}
      className="absolute z-20 w-[116px] select-none hidden lg:flex flex-col"
      style={{ ...card.pos, ...glass, padding: '10px 12px' }}
    >
      <p className="text-[8.5px] font-semibold text-[#6B6A68] uppercase tracking-wider leading-none mb-1.5">
        {card.label}
      </p>
      <p className="text-[20px] font-extrabold text-[#111118] leading-none tracking-tight mb-1">
        {card.value}
      </p>
      <p className="text-[9px] text-[#6B6A68] leading-tight">
        {card.subtitle}
      </p>
    </motion.div>
  );
}

/* ─── AI assistant card ─────────────────────────────────── */

function AIAssistantCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0, 6, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 1.2 },
        scale: { duration: 0.55, delay: 1.2, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 4.5, ease: 'easeInOut', repeat: Infinity, delay: 2.0 },
      }}
      className="absolute z-30 hidden lg:flex items-start gap-3"
      style={{
        bottom: '-34px',
        right: '20px',
        width: '232px',
        ...glass,
        padding: '12px 14px',
      }}
    >
      {/* Griffin avatar */}
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
        style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #a855f7 100%)' }}
      >
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-[12.5px] font-bold text-[#111118] leading-none mb-1.5">
          Hello, I'm Griffin.
        </p>
        <p className="text-[11px] text-[#6B6A68] leading-snug">
          How can I help automate your business today?
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Mobile / tablet mini card ─────────────────────────── */

function MiniCard({ card }: { card: CardData }) {
  return (
    <div
      className="rounded-2xl px-4 py-3.5"
      style={{
        background: 'rgba(255,255,255,0.92)',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 2px 12px rgba(124,58,237,0.12)',
      }}
    >
      <p className="text-[10px] font-semibold text-[#6B6A68] uppercase tracking-wide mb-1.5 leading-none">
        {card.label}
      </p>
      <p className="text-[1.3rem] font-extrabold text-[#111118] leading-none mb-1">
        {card.value}
      </p>
      <p className="text-[10px] text-[#6B6A68] leading-tight">
        {card.subtitle}
      </p>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center bg-[#FAF9F7]"
      style={{
        overflowX: 'clip',
        minHeight: '100vh',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%237c3aed' stroke-width='0.7' opacity='0.06'/%3E%3C/svg%3E\")",
      }}
    >
      {/* Ambient page glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{
          position: 'absolute', right: '-6%', top: '50%',
          transform: 'translateY(-50%)', width: '65%', height: '130%',
          background: 'radial-gradient(ellipse 60% 60% at 62% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', left: '-8%', top: '-15%',
          width: '40%', height: '50%',
          background: 'radial-gradient(ellipse 55% 55% at 30% 30%, rgba(139,92,246,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ══════════════════════ LEFT COLUMN ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left"
          >
            {/* Label */}
            <span className="section-label">
              Next-Gen Enterprise AI
            </span>

            {/* Headline */}
            <h1 className="font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] leading-[0.95] tracking-[-0.02em] text-[#111118]">
              Enterprise AI<br />
              That <CyclingWord /><br />
              <span className="text-[#6B6A68]">Not Just Another<br />Chatbot.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[0.9rem] sm:text-[0.95rem] text-[#6B6A68] leading-relaxed max-w-[400px] lg:max-w-[360px]">
              Transform your operations with intelligent AI systems.
              Automate workflows, gain insights, and scale with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
              <a href="#contact" className="btn-primary group inline-flex items-center justify-center">
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-150" />
              </a>
              <a href="#solutions" className="btn-secondary group inline-flex items-center justify-center">
                <Play className="w-3.5 h-3.5 mr-1.5 fill-current" />
                Explore Solutions
              </a>
            </div>

            {/* Metrics row */}
            <div className="flex items-center pt-5 border-t border-black/10 mt-1 w-full justify-center lg:justify-start">
              {METRICS.map((m, i) => (
                <React.Fragment key={m.label}>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[1.2rem] sm:text-[1.35rem] font-extrabold text-[#111118] leading-none tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#6B6A68] font-medium whitespace-nowrap">
                      {m.label}
                    </span>
                  </div>
                  {i < METRICS.length - 1 && (
                    <div className="w-px h-7 bg-black/12 mx-3 sm:mx-5 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ══════════════════════ RIGHT COLUMN ══════════════════════ */}
          {/*
            pb-20 on desktop: creates visual room below the video for the AI
            assistant card which is positioned at bottom:-40px.
          */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
            className="flex items-center justify-center py-6 lg:pt-10 lg:pb-14 lg:px-10"
          >
            {/*
              Video wrapper — the single position:relative reference for all
              floating elements. The video fills this div. Cards at left/right:-60px
              reach 60 px outside this boundary on each side (into the column gap
              and surrounding whitespace), never over the centred Griffin.
              The section's overflowX:clip prevents horizontal scroll.
            */}
            <div
              className="relative w-full"
              style={{ maxWidth: '720px' }}
            >
              {/* Deep violet radial glow — anchored behind Griffin */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: '-80px -64px',
                  background:
                    'radial-gradient(ellipse 68% 68% at 50% 54%, rgba(124,58,237,0.16) 0%, rgba(167,139,250,0.07) 45%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                  filter: 'blur(2px)',
                }}
              />

              {/*
                16:9 outer frame — only provides the aspect ratio and the shadow.
                The INNER div (overflow:hidden) clips the video to the border-radius.
                Cards are siblings of both, so they are NOT clipped.
              */}
              <div
                className="relative"
                style={{
                  aspectRatio: '16 / 9',
                  borderRadius: '24px',
                  boxShadow:
                    '0 8px 20px rgba(0,0,0,0.07), 0 28px 80px rgba(124,58,237,0.20), 0 0 0 1px rgba(124,58,237,0.10)',
                  zIndex: 1,
                }}
              >
                {/* Video — clipped to rounded corners by overflow:hidden here */}
                <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '24px' }}>
                  <video
                    src="/hero-white.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              {/*
                Floating stat cards — absolute children of the wrapper (not the
                inner video div). They extend -60px left/right beyond the video
                frame, floating in the whitespace around Griffin.
              */}
              {CARDS.map((card, i) => (
                <StatCard key={card.id} card={card} entryDelay={0.4 + i * 0.14} />
              ))}

              {/* AI chat card — floats below the video frame */}
              <AIAssistantCard />
            </div>
          </motion.div>

        </div>

        {/* Mobile / tablet stat grid — below the hero grid, hidden on lg+ */}
        <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden max-w-sm mx-auto">
          {CARDS.map((card) => (
            <MiniCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
