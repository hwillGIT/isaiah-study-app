import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedCollapseProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function AnimatedCollapse({ isOpen, children }: AnimatedCollapseProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
