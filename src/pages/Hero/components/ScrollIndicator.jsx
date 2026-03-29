import { motion } from "framer-motion";

/**
 * Animated scroll indicator with cylinder design
 */
const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 max-sm:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}>
      <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-medium">
        Scroll
      </span>
      <div className="relative">
        <div className="relative w-8 h-14 rounded-[1.25rem] bg-gradient-to-b from-gray-800/60 to-gray-900/60 border border-indigo-400/10 overflow-hidden backdrop-blur-sm shadow-lg shadow-indigo-500/5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent opacity-50" />
          <motion.div
            className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg shadow-indigo-400/50"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-indigo-400/30 blur-[1px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-black/30 blur-[1px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
