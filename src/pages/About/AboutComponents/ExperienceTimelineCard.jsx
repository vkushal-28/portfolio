// import { FaLaptop } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

const ExperienceTimelineCard = ({
  role,
  companyName,
  address = "",
  startDate,
  endDate,
  description,
  short_description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <li className="mb-5 ms-6 md:ms-10 pt-3">
      <span className="absolute flex items-start justify-center w-5 h-5 mt-1 rounded-md  -start-2.5 shadow-md p-[8px] bg-indigo-400 delay-150 "></span>
      <span className="block mb-2 text-sm font-semibold  w-fit py-1 px-2 bg-indigo-900 rounded-md">
        {startDate} - {endDate || "Present"}
      </span>
      <p className="flex items-start mb-1 font-semibold  md:text-lg  lg:text-xl text-indigo-400 ">
        {role}
        {/* {isLatest && (
          <span className="bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 rounded dark:bg-indigo-900 dark:text-indigo-200 ms-3">
            Latest
          </span>
        )} */}
      </p>
      <p className="flex items-start mb-2 md:mb-1 font-semibold  md:text-lg  lg:text-xl text-white">
        @ {companyName}{" "}
        <span className="text-gray-50 ">{` ${address && `, ${address}`}`}</span>
      </p>

      <p className="text-left italic text-quote ">
        {short_description}{" "}
        <span
          className="text-indigo-400 text-sm inline"
          onClick={() => setIsModalOpen(true)}>
          View more..
        </span>
      </p>
      {/* Arrow Icon */}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 
         ">
          <div
            ref={modalRef}
            className="relative w-full lg:max-w-5xl md:max-w-3xl bg-gradient-to-br bg-bl rounded-2xl shadow-lg p-4 lg:p-8 text-white text-left  overflow-hidden">
            {/* Close Button */}
            <IoCloseOutline
              className="absolute top-4 right-4 text-white text-xl cursor-pointer hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            />
            <p className="text-sm mb-2 lg:mb-4 font-semibold text-white bg-indigo-900 inline-block py-1 px-2 rounded">
              {startDate} - {endDate || "Present"}
            </p>
            <h2 className="text-indigo-400 text-md lg:text-xl font-bold mb-1">
              {role}
            </h2>
            <div className="font-semibold mb-4 lg:mb-7 text-md lg:text-xl">
              @ {companyName} {address && `, ${address}`}
            </div>

            <div className="mb-2 italic text-sm lg:text-base">{`[My responsibilities]`}</div>
            <div className=" h-full overflow-auto">
              <ul className=" text-left px-5">
                {description.length > 0 &&
                  description.map((data, i) => (
                    <li className="list-disc text-sm lg:text-base">
                      <p>{data}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
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
