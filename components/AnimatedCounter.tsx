/**
 * AnimatedCounter — counts from 0 to `target` with an ease-out cubic curve
 * when the element enters the viewport.  Triggers once, never resets.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target:    number;
  suffix?:   string;
  prefix?:   string;
  /** Animation duration in ms (default 2000) */
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix   = "",
  prefix   = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let rafId: number;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /* ease-out cubic: fast start, gentle finish */
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
