'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Tabs({ items }: { items: { label: string; content: React.ReactNode }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="my-8 border rounded-xl overflow-hidden bg-background shadow-sm">
      <div className="flex border-b overflow-x-auto custom-scrollbar bg-surface/50">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
              activeIndex === idx ? 'text-brand' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {item.label}
            {activeIndex === idx && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="prose-p:mt-0"
          >
            {items[activeIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
