import PropTypes from "prop-types";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/variants";

const CommonHeader = ({ title1, title2, description }) => {
  return (
    <div className="flex flex-col justify-around ">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidded"
        className="h2"
      >
        {title1} <span className="gradient-text">{title2}</span>
      </motion.h2>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidded"
        className="max-w-sm md:max-w-3xl mx-auto  mb-4 xl:mb-20 px-2 "
      >
        {description}
      </motion.p>
    </div>
  );
};
CommonHeader.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CommonHeader;
