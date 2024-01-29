import PropTypes from "prop-types";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/variants";
import Reveal from "./Reveal";

const CommonHeader = ({ title1, title2, description }) => {
  return (
    <div className="flex flex-col justify-around ">
      <Reveal delay={0.2} direction="right" className="h2">
        {title1} <span className="gradient-text">{title2}</span>
      </Reveal>
      <Reveal
        delay={0.4}
        direction="left"
        className="max-w-sm md:max-w-3xl mx-auto  mb-4 xl:mb-20 px-2 "
      >
        <p>{description}</p>
      </Reveal>
    </div>
  );
};
CommonHeader.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CommonHeader;
