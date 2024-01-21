import React from "react";
import { skillsData } from "../../data/languagesData";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../helpers/variants";

const Skills = () => {
  return (
    <div className="h-full bg-blLight  ">
      <div className="h-full bg-bl py-32 text-center xl:text-left rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[7%] md:rounded-br-[10%] ">
        <div className="container mx-auto  text-center">
          <div className="flex flex-col justify-around ">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidded"
              className="h2"
            >
              My <span className="gradient-text">Skills.</span>
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
          <div className="flex  flex-auto flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
            {skillsData.map((skill) => (
              <div
                className="w-[70px] md:w-[80px] xl:w-[100px] h-[70px] md:h-[80px] xl:h-[100px] flex justify-center rounded-full bg-indigo-900/50"
                key={skill.id}
                style={{
                  boxShadow: `-2px -2px 4px ${skill.shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                }}
              >
                <img src={skill.icon} alt="" className="w-full p-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
