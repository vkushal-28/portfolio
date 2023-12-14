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
        <div className="text-center flex flex-col justify-center xl:pt-40  xl:text-left h-full container mx-auto ">
          <div className="grid grid-cols-5 gap-1">
            <div className="col-span-3">
              {/* title */}
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1 mb-0"
              >
                Hey! I'm <br />
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                  Kushal Vala
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8 "
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </motion.p>
              <div className="h-[40px] w-[150px] rounded-md bg-gradient-to-r  from-indigo-400 via-purple-500 to-pink-500 px-[2px] pt-[2px] pb-[2.5px]">
                <button type="button" className=" bg-bl rounded w-full h-full ">
                  <span className="py-2">Download CV</span>
                </button>
                {/* <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
                  <h1 class="text-2xl font-black text-white">
                    the quick brown fox jumps over the lazy dog
                  </h1>
                </div> */}
              </div>
            </div>
            <div className="text-center w-full h-full col-span-2">
              <img src={Imgs.webTech} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      {/* <div className="w-full h-full absolute right-0 bottom-0"> */}
      {/* bg image */}
      {/* <div className=" xl:bg-explosion xl:bg-cover  xl:bg-no-repeat w-full h-full absolute "></div> */}
      {/* particles */}
      {/* avatar img */}
      {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[637px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[7%]"
        >
          <Avatar />
        </motion.div> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
