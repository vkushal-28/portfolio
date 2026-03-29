import { motion } from "framer-motion";
import React, { useMemo } from "react";

const PARTICLE_COUNT = 35;

/**
 * Generates randomized animation values for a particle
 */
const useParticleValues = (index) => {
  return useMemo(
    () => ({
      xAmplitude: Math.random() * 15 - 7.5, // -7.5 to +7.5 horizontal drift
      duration: 2.5 + Math.random() * 1.5, // 2.5-4 seconds (slower)
      delay: Math.random() * 2, // 0-2 seconds
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }),
    [index],
  );
};

const Particle = ({ index }) => {
  const values = useParticleValues(index);

  return (
    <motion.div
      className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-violet-400"
      animate={{
        y: [0, -30, 0],
        x: [0, values.xAmplitude, 0],
        opacity: [0, 0.7, 0],
      }}
      transition={{
        duration: values.duration,
        repeat: Infinity,
        delay: values.delay,
        ease: "easeInOut",
      }}
      style={{ left: values.left, top: values.top }}
    />
  );
};

/**
 * Background floating particle animation
 */
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <Particle key={i} index={i} />
      )),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

export default FloatingParticles;
