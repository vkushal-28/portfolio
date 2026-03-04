import { skillsData2 } from "../../data/languagesData";
import { useNav } from "../../hooks/useNav";
import Section from "../../components/Section";
import { techStack } from "../../data/techStack";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

const Skills = () => {
  // hooks
  const skillsRef = useNav("Skills");

  return (
    <Section
      sectionRef={skillsRef}
      id="skillsSection"
      variant="dark"
      title1={"My"}
      title2={"Skills."}
      description={
        "In the dynamic realm of technology, I bring a versatile set of skills that fuse creativity with technical proficiency. My expertise encompasses a range of programming languages, frameworks, and tools, allowing me to navigate and excel in diverse development environments."
      }>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}>
        {Object.entries(skillsData2).map(([category, skills]) => (
          <motion.div
            className="block lg:flex gap-10 mb-10"
            key={category}
            variants={categoryVariants}>
            <div className="w-fit lg:w-[12%] mb-5 lg:mb-0">
              <motion.div
                className="rounded-lg border border-indigo-400 text-white font-semibold text-center px-2 lg:p-3 capitalize w-full"
                whileHover={{ scale: 1.05, borderColor: "#818cf8" }}
                transition={{ type: "spring", stiffness: 300 }}>
                {categoryLabels[category] || category}
              </motion.div>
            </div>
            <div className="grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-3 lg:gap-5 w-full">
              {skills.map((skill) => {
                return (
                  <motion.div
                    className="flex flex-col md:flex-row items-center h-fit rounded-lg bg-indigo-800/50 p-2 md:p-2.5 gap-1 md:gap-x-1.5 cursor-pointer"
                    key={skill}
                    variants={skillCardVariants}
                    whileHover="hover"
                    style={{
                      boxShadow: `-2px -2px 4px ${techStack[skill].shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                    }}>
                    <motion.img
                      src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                        techStack[skill].image
                      }`}
                      alt={`skill-${techStack[skill].name}`}
                      className="h-7 md:h-8"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    />
                    <p className="font-normal text-xs sm:text-sm lg:text-base">
                      {techStack[skill].name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
