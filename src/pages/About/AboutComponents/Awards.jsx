import PropTypes from "prop-types";
import { RiAwardFill } from "react-icons/ri";

const Awards = () => {
  return (
    <div className="py-2 px-0 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start transition-all delay-150 w-full">
      <ol className="relative">
        <li className="mb-10 ms-6 text-left">
          <span className="absolute flex items-start justify-center w-8 h-8  rounded-full -start-3 ">
            <RiAwardFill className="text-3xl text-yellow-500" />
          </span>
          <h3 className="flex items-center justify-between mb-1 text-lg md:text-xl font-semibold  text-yellow-500 w-full ml-2 ">
            Best Employee of the Year
            <span className="bg-blue-100 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 ms-3 cursor-pointer">
              <a
                href={`${
                  import.meta.env.VITE_IMAGE_URL
                }certificates/SaturncubeCertificate.jpeg`}
                target="_blank"
                rel="noreferrer">
                View
              </a>
            </span>
          </h3>
          <div className="flex items-start mb-1 text-md md:text-lg font-semibold  text-white ml-2">
            @ Saturncube Technologies
          </div>

          <div className="mb-4 text-left text-gray-500 dark:text-gray-400 ml-2">
            <p>
              I am thrilled to announce that I have been honored with the
              prestigious
              <b>
                <span className="text-white px-2">
                  "Best Employee of the year 2021"
                </span>
              </b>
              award. This recognition is a testament to my unwavering
              dedication, exceptional work ethic, and commitment to excellence
              in contributing to the success of our team and company. I am truly
              grateful for this acknowledgment to Saturncube Technologies.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};
Awards.propTypes = {
  role: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  isLatest: PropTypes.bool.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Awards;
