/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { RxArrowTopRight } from "react-icons/rx";
import { FaCode } from "react-icons/fa";
const Services = () => {
  return (
    <div className="h-full bg-blLight py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center justify-around xl:flex-row gap-6 ">
        <div className="w-full max-w-sm py-6 relative bg-white border border-gray-100 rounded-lg shadow dark:bg-bl ">
          <div className="flex flex-col items-center ">
            <div className=" absolute top-[-30%] w-20 bg-gray-700 h-20 rounded-full shadow-lg flex items-center justify-center">
              <FaCode className="text-5xl" />
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </div>
            {/* arrow */}
          </div>
          <div className="text-3xl ">
            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-380 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
