/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

import { FaCode } from "react-icons/fa";
import { servicesData } from "../../data/serviceData";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../helpers/variants";

const Services = () => {
  const ServiceCard = ({ name, description }) => {
    return (
      <div className="w-full max-w-sm md:max-w-[md] lg:max-w-[350px] h-[285px]  md:h-[285px] lg:h-[325px]  xl:h-[286px] max-h-[550px] p-[3px] rounded-tl-[10%] rounded-r-[2%] rounded-l-[2%]  rounded-br-[10%]  rounded bg-gradient-to-br from-indigo-400 from-[10%] via-bl via-[50%]  to-pink-500 to-[95%]  ">
        <div className="w-full max-w-sm p-7 h-[278px] md:h-[280px] lg:h-[318px] xl:h-[280px]  bg-white   shadow dark:bg-bl rounded-tl-[16%] rounded-br-[16%] rounded-bl-[3%]">
          <div className="flex flex-col items-center ">
            <div className="  w-20 bg-gray-700 h-20 rounded-full shadow-md mb-4 inset-48 shadow-pink-500 flex items-center justify-center">
              <FaCode className="text-5xl" />
            </div>
            <h5 className="mb-3  text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-full bg-blLight py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[7%] md:rounded-br-[10%] ">
      <div className="container mx-auto  flex flex-col justify-around ">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidded"
          className="h2"
        >
          My <span className="gradient-text">Services.</span>
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidded"
          className="max-w-sm md:max-w-3xl mx-auto  mb-6 xl:mb-20 px-2 "
        >
          10 years ago, I began freelancing as a developer. Since then, I've
          done done remote work for agencies, consulted for startups, and
          collaborated on digital products for business and customer use.
        </motion.p>
      </div>
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-around xl:flex-row gap-6 ">
        {/* =========== Service Details Card =========== */}
        {servicesData.map((service) => (
          <ServiceCard
            name={service.service_name}
            icon={service.icon}
            description={service.service_description}
          />
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Services;
