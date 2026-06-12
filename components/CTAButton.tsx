/**
 * CTAButton — Reusable CTA with two themes and two variants.
 *
 * theme="dark"  → white-on-dark (original enterprise hero)
 * theme="light" → dark-on-white (new premium white hero)
 *
 * variant="primary" → filled + glow
 * variant="outline" → bordered ghost
 */
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children:   ReactNode;
  variant?:   "primary" | "outline";
  theme?:     "dark" | "light";
  href?:      string;
  onClick?:   () => void;
  className?: string;
  asButton?:  boolean;
}

export default function CTAButton({
  children,
  variant   = "primary",
  theme     = "dark",
  href      = "#",
  onClick,
  className = "",
  asButton  = false,
}: CTAButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 rounded-full font-semibold text-sm px-7 py-3.5 cursor-pointer select-none overflow-hidden transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

  /* ── Light theme (white background) ── */
  const lightPrimary =
    "bg-indigo-600 text-white shadow-lg shadow-indigo-200/60 hover:bg-indigo-700 hover:shadow-indigo-300/60";
  const lightOutline =
    "border border-gray-200 text-gray-700 bg-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900";

  /* ── Dark theme (dark background) ── */
  const darkPrimary =
    "bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:brightness-110";
  const darkOutline =
    "border border-white/20 text-slate-200 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:text-white";

  const variantClass =
    theme === "light"
      ? variant === "primary" ? lightPrimary : lightOutline
      : variant === "primary" ? darkPrimary  : darkOutline;

  const cls = `${base} ${variantClass} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap:   { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  /* Shine sweep — only on filled primary */
  const shine = variant === "primary" && (
    <motion.span
      aria-hidden="true"
      className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ x: "-100%" }}
      whileHover={{ x: "220%" }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    />
  );

  if (asButton) {
    return (
      <motion.button onClick={onClick} className={cls} {...motionProps}>
        {shine}{children}
      </motion.button>
    );
  }

  return (
    <motion.a href={href} className={cls} {...motionProps}>
      {shine}{children}
    </motion.a>
  );
}
