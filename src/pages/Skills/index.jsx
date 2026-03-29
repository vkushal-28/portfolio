import { skillsData2 } from "../../data/languagesData";
import { techStack } from "../../data/techStack";
import { useNav } from "../../hooks/useNav";
import Section from "../../components/Section";
import SkillCard from "../../components/SkillCard";
import CategoryHeader from "../../components/CategoryHeader";
import { motion } from "framer-motion";

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

const Skills = () => {
  const skillsRef = useNav("Skills");
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  return (
    <Section
      sectionRef={skillsRef}
      id="skillsSection"
      variant="dark"
      title1="My"
      title2="Skills."
      description="In the dynamic realm of technology, I bring a versatile set of skills that fuse creativity with technical proficiency. My expertise encompasses a range of programming languages, frameworks, and tools, allowing me to navigate and excel in diverse development environments.">
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
            <CategoryHeader category={category} />
            <div className="grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-2 md:gap-3 lg:gap-5 w-full">
              {skills.map((skill) => (
                <SkillCard
                  key={skill}
                  skill={skill}
                  techStack={techStack}
                  imageUrl={imageUrl}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
