/**
 * HeroSection — Premium white-themed enterprise hero.
 *
 * Inspired by Apple, Stripe, Notion, and modern SaaS design.
 *
 * Architecture
 * ├── Background: pure white + subtle indigo-50 radial glow + faint dot grid
 * ├── Left column: badge → headline → subtitle → CTAs → trust logos
 * ├── Right column: floating glassmorphism card cluster
 * │   ├── MainCard: circular progress gauge + mini bar chart
 * │   ├── ActivityCard: live learner count (top-right, tilted)
 * │   ├── UptimeCard: system status (bottom-left)
 * │   └── AIBadge: AI Tutor status (overlapping)
 * └── Feature strip: three capability highlights
 */
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import CTAButton from "./CTAButton";

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: EASE_OUT },
  }),
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */

const trustedBy = ["Google", "Stripe", "Airbnb", "Shopify", "Notion"];

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Instant AI Tutoring",
    sub:   "< 200 ms response",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "Real-time Analytics",
    sub:   "Team-level insights",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Enterprise Security",
    sub:   "SOC 2 · ISO 27001",
  },
] as const;

/* Bar-chart data for the main card */
const chartBars = [58, 72, 65, 80, 76, 88, 94];

/* ─────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────────── */

/** Animated SVG circular gauge */
function CircularGauge({ value = 94 }: { value?: number }) {
  const r             = 48;
  const circumference = 2 * Math.PI * r;
  const offset        = circumference * (1 - value / 100);

  return (
    <div className="relative w-32 h-32 flex-shrink-0" aria-label={`Score: ${value}%`}>
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90" aria-hidden="true">
        {/* Track ring */}
        <circle cx="60" cy="60" r={r} fill="none" stroke="#F3F4F6" strokeWidth="10" />

        {/* Progress ring */}
        <motion.circle
          cx="60" cy="60" r={r}
          fill="none"
          stroke="url(#gauge-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, delay: 0.6, ease: EASE_OUT }}
        />
        <defs>
          <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#818CF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Centre label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-2xl font-extrabold text-gray-900 tabular-nums"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          {value}%
        </motion.span>
        <span className="text-[10px] text-gray-400 font-medium mt-0.5">Score</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────── */

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Subtle parallax — background drifts up slightly on scroll */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgParallax = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >

      {/* ══════════════════════════════════════════════
          BACKGROUND — very subtle, never distracting
      ══════════════════════════════════════════════ */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgParallax }}
      >
        {/* Soft indigo radial bloom at top-center */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-indigo-50 opacity-60 blur-[96px]" />

        {/* Softer secondary bloom top-right */}
        <div className="absolute -top-16 right-[-10%] w-[500px] h-[400px] rounded-full bg-violet-50 opacity-40 blur-[72px]" />

        {/* Faint dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #94A3B8 1px, transparent 1px)",
            backgroundSize:  "28px 28px",
          }}
        />
      </motion.div>

      {/* ══════════════════════════════════════════════
          MAIN GRID — two-column layout
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">

        {/* ─── LEFT COLUMN — copy ─── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col gap-8 max-w-xl"
        >

          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              AI-Powered Enterprise Learning Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            custom={1}
            className="text-[2.75rem] sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.07] text-gray-900"
          >
            Transform Your
            <br />
            Workforce with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                AI.
              </span>
              {/* Animated underline */}
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 0.7, ease: EASE_OUT }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-gray-500 leading-relaxed"
          >
            CodeMindAI delivers enterprise-grade intelligent learning infrastructure —
            adaptive courses, real-time analytics, and AI-driven upskilling that
            scales with your organisation.
          </motion.p>

          {/* CTA pair */}
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
            <CTAButton variant="primary" theme="light" href="#services">
              Explore Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </CTAButton>
            <CTAButton variant="outline" theme="light" href="#contact">
              Contact Us
            </CTAButton>
          </motion.div>

          {/* Trusted-by strip */}
          <motion.div variants={fadeUp} custom={4} className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2" role="list" aria-label="Companies that trust CodeMindAI">
              {trustedBy.map((name) => (
                <span
                  key={name}
                  role="listitem"
                  className="text-base font-bold text-gray-300 tracking-tight select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ─── RIGHT COLUMN — floating card cluster ─── */}
        <div className="relative flex items-center justify-center h-[520px] lg:h-auto">

          {/* ── Activity notification (top-right, slight tilt) ── */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 3 }}
            animate={{ opacity: 1, y: 0,   rotate: 3 }}
            transition={{ delay: 0.55, duration: 0.65, ease: EASE_OUT }}
            className="absolute top-0 right-0 lg:-right-6 z-20"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-xl shadow-gray-200/60 min-w-[220px]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold text-gray-900">2,847 completions</p>
                <p className="text-[11px] text-gray-400">in the last 24 hours</p>
              </div>
              <span className="ml-auto flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* ── Main performance card (center) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            transition={{ delay: 0.35, duration: 0.7, ease: EASE_OUT }}
            className="relative z-10 w-full max-w-[340px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white border border-gray-100 rounded-3xl p-7 shadow-2xl shadow-gray-200/70"
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Learning Performance</p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">Q2 2026 Overview</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Gauge + stat row */}
              <div className="flex items-center gap-6 mb-6">
                <CircularGauge value={94} />

                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Avg. Score</p>
                    <p className="text-xl font-extrabold text-gray-900">94 / 100</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Courses Active</p>
                    <p className="text-xl font-extrabold text-gray-900">200+</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    12% vs last quarter
                  </span>
                </div>
              </div>

              {/* Mini bar chart */}
              <div>
                <p className="text-[11px] text-gray-400 font-medium mb-2">Weekly completions</p>
                <div className="flex items-end gap-1 h-11" aria-hidden="true">
                  {chartBars.map((h, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 rounded-sm ${
                        i === chartBars.length - 1 ? "bg-indigo-500" : "bg-indigo-100"
                      }`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.07, ease: EASE_OUT }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Uptime status card (bottom-left, slight tilt) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0,  rotate: -2 }}
            transition={{ delay: 0.7, duration: 0.65, ease: EASE_OUT }}
            className="absolute bottom-2 left-0 lg:-left-8 z-20"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-xl shadow-gray-200/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold text-gray-900">99.98% Uptime</p>
                <p className="text-[11px] text-gray-400">All systems operational</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── AI Tutor badge (overlapping main card, right edge) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1,   x: 0  }}
            transition={{ delay: 0.9, duration: 0.55, ease: EASE_OUT }}
            className="absolute right-0 lg:right-[-20px] top-1/2 -translate-y-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-4 shadow-xl shadow-indigo-300/40 text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-bold">AI Tutor</span>
                <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-indigo-200 font-medium">50K+ learners</p>
              <p className="text-[11px] text-indigo-200">active right now</p>
            </motion.div>
          </motion.div>

          {/* Decorative rings behind main card */}
          <div aria-hidden="true" className="absolute inset-[15%] rounded-full border border-gray-100 pointer-events-none" />
          <div aria-hidden="true" className="absolute inset-[5%]  rounded-full border border-gray-50  pointer-events-none" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          FEATURE STRIP — three capability highlights
      ══════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: EASE_OUT }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20"
      >
        {/* Thin divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.5, ease: EASE_OUT }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200 cursor-default"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                {f.icon}
              </span>
              <div>
                <p className="text-sm font-bold text-gray-900">{f.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{f.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
