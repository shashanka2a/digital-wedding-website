'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export function FallingPetals({ color = '#C9A84E', count = 15 }: { color?: string; count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const newPetals = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 6 + Math.random() * 8,
    }));
    setPetals(newPetals);
  }, [count]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${petal.left}%`,
            top: '-10px',
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            backgroundColor: color,
            filter: 'blur(1px)',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * 50],
            rotate: [0, 360, 720],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
