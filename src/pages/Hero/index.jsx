/* eslint-disable react/no-unescaped-entities */
// components

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../helpers/variants";
const Hero = () => {
  return (
    <div className="bg-primary ">
      {/* text */}
      <div className="  bg-explosion bg-cover w-full xl:h-[100vh] md:h-[70vh] h-[90vh] bg-no-repeat  ">
        <div className="text-center flex flex-col justify-center xl:pt-40  xl:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> into{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
              Digital Reality
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </motion.p>
          {/* btn */}
          {/* <div class="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div> */}
          {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
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
      </div>
    </div>
  );
};

export default Hero;
