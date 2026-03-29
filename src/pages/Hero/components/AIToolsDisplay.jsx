import { motion } from "framer-motion";
import React from "react";

// AI tools configuration with positions and animation delays
const AI_TOOLS = [
  {
    name: "Cursor AI",
    imgKey: "cursor",
    position:
      "top-[10px] lg:-top-[50px] -left-[16px] md:-left-[30px] xl:-left-[100px]",
    size: "w-10 h-10 md:w-16 md:h-16",
    delay: 0,
  },
  {
    name: "GitHub Copilot",
    imgKey: "copilot",
    position: "bottom-2 right-0 lg:-bottom-18 xl:-bottom-24 lg:-right-12",
    size: "w-10 h-10 md:w-14 md:h-14",
    delay: 0.2,
  },
  {
    name: "Claude",
    imgKey: "claude",
    position:
      "top-[30px] lg:-top-[10px] -right-[0px] lg:-right-[30px] xl:-right-[80px]",
    size: "w-10 h-10 md:w-16 md:h-16",
    delay: 0.2,
  },
];

/**
 * Renders floating AI tool icons around the profile image
 */
const AIToolsDisplay = ({ images }) => {
  return (
    <div className="absolute -inset-16 md:-inset-20 flex items-center justify-center pointer-events-none">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {AI_TOOLS.map((tool) => (
          <motion.div
            key={tool.name}
            className={`absolute ${tool.position} ${tool.size} bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg flex items-center justify-center overflow-hidden`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              delay: tool.delay,
            }}>
            <img
              src={images[tool.imgKey]}
              alt={tool.name}
              className="w-6 h-6 md:w-10 md:h-10 object-contain z-50"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIToolsDisplay;
