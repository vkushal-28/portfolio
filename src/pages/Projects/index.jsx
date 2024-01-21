/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../helpers/variants";

import CommonHeader from "../../components/CommonHeader";
import WorkSlider from "./ProjectsComponent/WorkSlider";

const Projects = () => {
  return (
    <div className="h-full w-full bg-blLight py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[7%] md:rounded-br-[10%] ">
      <div className="container mx-auto">
        <CommonHeader
          title1={"My"}
          title2={"Work."}
          description={
            "10 years ago, I began freelancing as a developer. Since then, I've done done remote work for agencies, consulted for startups, and collaborated on digital products for business and customer use."
          }
        />
        <div className=" h-full w-full flex flex-col lg:flex-row items-center justify-around  gap-6 ">
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full "
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Projects;
