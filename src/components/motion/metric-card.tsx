"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type MetricCardProps = {
  value: number;
  suffix: string;
  label: string;
  note: string;
  index: number;
};

export function MetricCard({ value, suffix, label, note, index }: MetricCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let frame = 0;
    const total = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(value * progress));
      if (frame >= total) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [inView, reduceMotion, value]);

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="metric-card"
    >
      <p className="metric-value">
        {count}
        {suffix ? <span>{suffix}</span> : null}
      </p>
      <h3>{label}</h3>
      <p>{note}</p>
    </motion.div>
  );
}
