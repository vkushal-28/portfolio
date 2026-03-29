import { motion } from "framer-motion";
import React from "react";

/**
 * Reusable animated button with 3 variants and shimmer effects
 */
const AnimatedButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 px-2 md:px-4 py-2 font-semibold rounded-lg overflow-hidden transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50",
    secondary:
      "bg-white/5 border border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white",
    tertiary:
      "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}>
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Glow borders */}
      {variant === "primary" && (
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.1)",
          }}
        />
      )}
      {variant === "tertiary" && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            border: "1px solid rgba(34, 211, 238, 0.5)",
            boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
          }}
        />
      )}

      {icon && (
        <span
          className={`relative z-10 ${iconPosition === "right" ? "ml-1" : "mr-1"}`}>
          {icon}
        </span>
      )}

      <span className="relative z-10 text-sm tracking-wide">{children}</span>
    </Component>
  );
};

export default AnimatedButton;
