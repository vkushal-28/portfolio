import { FaLaptop } from "react-icons/fa";
import PropTypes from "prop-types";

const ExperienceTimelineCard = ({
  role,
  companyName,
  isLatest,
  startDate,
  endDate,
  description,
}) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-start justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 shadow-md p-[6px] shadow-pink-500 dark:bg-blue-900">
        <FaLaptop />
      </span>
      <h3 className="flex items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {role}
        {isLatest && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            Latest
          </span>
        )}
      </h3>
      <div className="flex items-start mb-1 text font-semibold italic text-gray-900 dark:text-white">
        - {companyName}
      </div>
      <time className="block mb-2 text-sm text-left font-normal leading-none text-gray-400 dark:text-gray-500">
        {startDate} - {endDate}
      </time>
      <p className="mb-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
        {description}
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
  description: PropTypes.string.isRequired,
};

export default ExperienceTimelineCard;
