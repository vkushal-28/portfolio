export const fadeIn = (direction = "down", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

// Service card animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 1,
      duration: 0.8,
    },
  },
  hover: {
    y: -15,
    rotateX: 2,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

export const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.3, 1],
    transition: {
      delay: 0.5,
      duration: 4,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    },
  },
};

export const rippleVariants = {
  hidden: { scale: 0, opacity: 0.5 },
  visible: {
    scale: 4,
    opacity: 0,
    transition: {
      delay: 1,
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

export const badgeItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.05,
      delay: 0.4,
    },
  },
};
