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
                className="relative rounded-xl overflow-hidden backdrop-blur-sm h-fit"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                {/* Background gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(145deg, rgba(26,26,67,0.85) 0%, rgba(26,26,67,0.8) 100%)`,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(120,120,255,0.4), transparent)`,
                  }}
                />
                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(120,120,255,0.4), transparent)`,
                  }}
                />
                {/* Text content */}
                <div className="relative z-10 px-3 md:p-3.5 text-center">
                  <span className="font-semibold text-sm lg:text-base text-gray-100 capitalize tracking-wide">
                    {categoryLabels[category] || category}
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-3 lg:gap-5 w-full">
              {skills.map((skill) => {
                return (
                  <motion.div
                    className="flex flex-col md:flex-row items-center h-fit rounded-2xl p-3 md:p-3 gap-2 md:gap-x-2 cursor-pointer relative overflow-hidden group "
                    key={skill}
                    variants={skillCardVariants}
                    whileHover="hover"
                    style={{
                      boxShadow: `0 8px 32px -8px ${techStack[skill].shadow_color}50`,
                      background: `linear-gradient(165deg, rgba(15,15,35,0.95) 0%, rgba(10,10,25,0.9) 100%)`,
                      border: `1px solid rgba(255,255,255,0.08)`,
                    }}>
                    {/* Modern top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${techStack[skill].shadow_color}aa, transparent)`,
                      }}
                    />
                    {/* Modern bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${techStack[skill].shadow_color}aa, transparent)`,
                      }}
                    />

                    {/* Top-left corner accent blob */}
                    <div
                      className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-20"
                      style={{
                        background: techStack[skill].shadow_color,
                      }}
                    />

                    {/* Bottom-right corner subtle highlight */}
                    <div
                      className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-15"
                      style={{
                        background: techStack[skill].shadow_color,
                      }}
                    />

                    <motion.img
                      src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                        techStack[skill].image
                      }`}
                      alt={`skill-${techStack[skill].name}`}
                      className="h-7 md:h-8 relative z-10"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.7 },
                      }}
                    />
                    <p className="font-medium text-xs sm:text-sm lg:text-base relative z-10 text-gray-100 tracking-wide">
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
