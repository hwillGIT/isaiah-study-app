import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AppView } from '../types';

const sectionAccentColors: Record<number, string> = {
  1: '#ef4444',
  2: '#94a3b8',
  3: '#f59e0b',
  4: '#a855f7',
  5: '#facc15',
  6: '#60a5fa',
  7: '#22c55e',
};

interface ScrollProgressProps {
  view: AppView;
  selectedSection: number;
}

export default function ScrollProgress({ view, selectedSection }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const color = view === 'study' ? (sectionAccentColors[selectedSection] || '#f59e0b') : '#f59e0b';

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
      style={{ scaleX, backgroundColor: color }}
    />
  );
}
