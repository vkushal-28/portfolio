import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Reveal = ({ children, direction, delay, className }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={fadeIn(direction || "up", delay || 0.2)}
      initial="hidden"
      ref={ref}
      animate={mainControls}
      exit="hidded"
      transition={{ duration: 0.1, delay: 0.25 }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Reveal;
