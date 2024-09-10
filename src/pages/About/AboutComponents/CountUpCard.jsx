import PropTypes from "prop-types";
// counter
import CountUp from "react-countup";

const CountUpCard = ({ key, start, end, details, isHideBorder }) => {
  return (
    <div
      className={`relative flex-1 after:w-[1px] after:h-full ${
        !isHideBorder ? "after:bg-white/10" : ""
      } after:absolute after:top-0 after:right-0 `}
      key={key}>
      <div className="text-2xl xl:text-4xl font-extrabold text-pink-500 mb-2 ">
        <CountUp start={start} end={end} duration={5} /> +
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        {details}
      </div>
    </div>
  );
};

CountUpCard.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  details: PropTypes.string,
  isHideBorder: PropTypes.bool,
};
export default CountUpCard;
