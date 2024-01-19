/* eslint-disable react/no-unescaped-entities */
// components

// framer motion
import { motion } from "framer-motion";

import * as Imgs from "../../assets/images/index";
// variants
import { fadeIn } from "../../helpers/variants";
const Hero = () => {
  return (
    <div className="bg-primary header">
      {/* text */}
      <div className="  bg-explosion bg-cover w-full xl:h-[100vh] md:h-[70vh] h-[90vh] bg-no-repeat  ">
        <div className="text-center flex flex-col justify-center items-center lg:pt-32 xl:pt-36 md:text-left h-full container mx-auto ">
          <div className="grid grid-cols-0 sm:grid-cols-12 gap-0 sm:gap-2 md:gap-0 ">
            <div className="col-span-0 sm:col-span-6 md:col-span-7 md:gap-2 h-full ">
              {/* title */}
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1 mb-5 "
              >
                Hey! I'm <br />
                <span className=" gradient-text">Kushal Vala</span>
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto md:mx-0 mb-5 md:mb-8 text-center md:text-justify lg:text-start"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </motion.p>
              <div className="h-[40px] w-[150px] rounded-md   mx-auto md:mx-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 px-[2px] pt-[2px] pb-[2.5px]">
                <button type="button" className=" bg-bl rounded w-full h-full ">
                  <span className="py-2">Download CV</span>
                </button>
              </div>
            </div>
            <div className="md:flex items-center w-full sm:col-span-6 md:col-span-5 hidden ">
              <img src={Imgs.webTech} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
