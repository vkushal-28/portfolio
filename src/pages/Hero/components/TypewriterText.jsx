import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Static roles with colors
const ROLES = [
  { text: "Senior Frontend Engineer", color: "#F97316" },
  { text: "Fullstack Developer", color: "#66D0BC" },
  { text: "React.js Specialist", color: "#22d3ee" },
  { text: "Next.js Expert", color: "#E7DEAF" },
  { text: "Node.js Engineer", color: "#83CD29" },
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_COMPLETE = 2000;

/**
 * Typewriter effect cycling through role titles
 */
const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = ROLES[index].text;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), PAUSE_AFTER_COMPLETE);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        } else {
          // Move to next role
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      style={{ color: ROLES[index].color }}
      transition={{ duration: 0.3 }}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1">
        |
      </motion.span>
    </motion.span>
  );
};

export default TypewriterText;
