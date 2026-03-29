import { memo } from "react";
import { motion } from "framer-motion";
import {
  cardVariants,
  glowVariants,
  rippleVariants,
  badgeItemVariants,
} from "../../../utils/variants";

const ServiceCard = memo(({ service }) => {
  const { id, title, Icon, iconColor, gradient, description } = service;

  return (
    <motion.div
      className="group perspective-1000"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover">
      <div className="relative bg-gradient-to-br from-bl via-bl/95 to-bl/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden border border-indigo-500/30 shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_10px_rgba(99,102,241,0.3)] transition-all duration-500 transform-gpu preserve-3d flex flex-col h-full min-h-[250px]">
        {/* Animated background glow */}
        <motion.div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${gradient} blur-3xl pointer-events-none`}
          variants={glowVariants}
          animate="visible"
          initial="hidden"
        />

        {/* Ripple effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5"
          variants={rippleVariants}
        />

        {/* Floating particles */}
        {[1, 2, 3].map((particle) => (
          <motion.div
            key={`${id}-particle-${particle}`}
            className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${gradient} opacity-60`}
            animate={{
              y: [0, -30, 0],
              x: [0, (particle - 2) * 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + particle,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle * 0.5,
            }}
            style={{
              top: `${20 + particle * 20}%`,
              left: `${10 + particle * 25}%`,
            }}
          />
        ))}

        {/* Card content */}
        <div className="relative z-10 flex flex-col items-start flex-grow">
          {/* Icon */}
          <div className="mb-4">
            <motion.div
              className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]"
              style={{
                background: `linear-gradient(135deg, ${iconColor}20 0%, ${iconColor}05 100%)`,
                boxShadow: `-6px -6px 20px rgba(99, 102, 241, 0.15), 6px 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              }}>
              <Icon
                className="w-8 h-8 md:w-10 md:h-10"
                style={{ color: service.iconColor }}
              />
            </motion.div>
          </div>

          {/* Title with gradient accent */}
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 relative inline-block"
            variants={badgeItemVariants}>
            {title}
            <motion.div
              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${gradient}`}
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-left text-sm leading-relaxed mb-2 md:mb-3 h-8 md:h-16"
            variants={badgeItemVariants}>
            {description}
          </motion.p>

          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap gap-2 mt-auto pt-2 md:pt-3"
            variants={badgeItemVariants}>
            <span
              className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-semibold border border-white/10`}>
              Expert Level
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-bl/50 text-gray-300 border border-indigo-500/20">
              Available
            </span>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient}`}
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Corner accent */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full`}
        />
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
