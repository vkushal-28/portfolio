import PropTypes from "prop-types";
import Reveal from "./Reveal";

const CommonHeader = ({ title1, title2, description }) => {
  return (
    <div className="flex flex-col justify-around transition-all delay-150">
      <Reveal delay={0.1} direction="right" className="h2">
        {title1} <span className="gradient-text">{title2}</span>
      </Reveal>
      <Reveal
        delay={0.1}
        direction="left"
        className="max-w-sm md:max-w-3xl mx-auto  mb-14 xl:mb-20 px-2 ">
        <p className="">{description}</p>
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
