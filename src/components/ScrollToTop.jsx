import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Scroll container is the .page div, not window
      const pageElement = document.querySelector(".page");
      if (pageElement) {
        if (pageElement.scrollTop > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Check initial scroll position
    toggleVisibility();

    const pageElement = document.querySelector(".page");
    if (pageElement) {
      pageElement.addEventListener("scroll", toggleVisibility);
      return () => pageElement.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    const pageElement = document.querySelector(".page");
    if (pageElement) {
      pageElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-bl/90 backdrop-blur-md border-2 border-pink-400/60 text-pink-400 rounded-full shadow-lg shadow-violet-400/30 hover:shadow-pink-400/50 hover:border-pink-400 hover:text-white transition-all duration-300"
          aria-label="Scroll to top">
          <RiArrowUpLine className="text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
