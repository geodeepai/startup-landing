/**
 * Navbar — Scroll-aware enterprise navigation.
 * • Transparent + white-text when over the dark HeroSection
 * • White opaque + dark-text after scrolling past the hero
 * • Sticky, full-width, backdrop-blurred
 */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features",     href: "#features"      },
  { label: "Courses",      href: "#courses"        },
  { label: "How It Works", href: "#how-it-works"  },
  { label: "Pricing",      href: "#pricing"        },
] as const;

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* Switch style after scrolling 80 px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
        borderColor: "rgba(229,231,235,0.8)",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ backdropFilter: "blur(16px)", borderBottomWidth: 1, borderBottomStyle: "solid" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl flex-shrink-0">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#4F46E5" />
            <path d="M9 22l4-12 4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 18.5h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="22" cy="11" r="3.5" fill="#C4B5FD" />
            <path d="M22 9.5v1.5l1 1" stroke="#4F46E5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-gray-900">CodeMind</span>
          <span className="text-indigo-500 font-extrabold">AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors"
              whileHover={{ color: "#6366F1" }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#"
            className="text-sm font-medium text-gray-600 px-4 py-2 rounded-lg transition-colors"
            whileHover={{ color: "#6366F1" }}
            transition={{ duration: 0.2 }}
          >
            Sign in
          </motion.a>
          <motion.a
            href="#"
            className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full transition-colors shadow-sm shadow-indigo-500/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start for Free
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden p-2 rounded-lg"
          animate={{ color: "#374151" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <nav className="px-6 py-5 flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-100 my-1" />
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Sign in</a>
              <a
                href="#"
                className="text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-full transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Start for Free
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
