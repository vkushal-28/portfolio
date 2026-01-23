// import { FaLaptop } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const ExperienceTimelineCard = ({
  role,
  companyName,
  address = "",
  startDate,
  endDate,
  short_description,
}) => {
  const [open, setOpen] = useState(false);
  const ModalSection = (e) => {
    return (
      <>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}>
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                ✕
              </button>

              <h2 className="text-lg font-semibold mb-2">Modal title</h2>
              <p className="text-sm text-gray-600">Your content goes here.</p>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <li className="mb-10 ms-6 md:ms-10 pt-3">
      <span className="absolute flex items-start justify-center w-5 h-5 mt-1 rounded-md  -start-2.5 shadow-md p-[8px] bg-blue-400 delay-150 "></span>
      <span className="block mb-2 text-sm font-semibold  w-fit py-1 px-2 bg-blue-900 rounded-md">
        {startDate} - {endDate || "Present"}
      </span>
      <p className="flex items-start mb-1 font-semibold  md:text-lg  lg:text-xl text-blue-400 ">
        {role}
        {/* {isLatest && (
          <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-200 ms-3">
            Latest
          </span>
        )} */}
      </p>
      <p className="flex items-start mb-2 md:mb-1 font-semibold  md:text-lg  lg:text-xl text-white">
        @ {companyName}{" "}
        <span className="text-gray-50 ">{` ${address && `, ${address}`}`}</span>
      </p>

      <p className="text-left italic text-quote">{short_description}</p>
      {/* <p className="mb-4  text-left ">
        <ul className="list-disc ">
          {description.length > 0 &&
            description.map((desc, i) => <li key={i}>{desc}</li>)}
        </ul>
      </p> */}
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
