import { FaLaptop } from "react-icons/fa";
import PropTypes from "prop-types";

const ExperienceTimelineCard = ({
  role,
  companyName,
  address,
  startDate,
  endDate,
  description,
}) => {
  return (
    <li className="mb-10 ms-10">
      <span className="absolute flex items-start justify-center w-6 h-6 rounded-md  -start-3 shadow-md p-[8px] bg-blue-400 delay-150"></span>
      <span className="block mb-2 text-sm font-semibold  w-fit py-1 px-2 bg-blue-900 rounded-md">
        {startDate} - {endDate || "Present"}
      </span>
      <p className="flex items-start mb-1 font-semibold text-xl text-blue-400 ">
        {role}
        {/* {isLatest && (
          <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-200 ms-3">
            Latest
          </span>
        )} */}
      </p>
      <p className="flex items-start mb-2 font-semibold text-lg text-white">
        @ {companyName} <span className="text-gray-50 ">{`, ${address}`}</span>
      </p>

      <p className="mb-4  text-left ">
        <ul className="list-disc ">
          {description.length > 0 &&
            description.map((desc, i) => <li key={i}>{desc}</li>)}
        </ul>
      </p>
    </li>
  );
};
ExperienceTimelineCard.propTypes = {
  role: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  isLatest: PropTypes.bool.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default ExperienceTimelineCard;
