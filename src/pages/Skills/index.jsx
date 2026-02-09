import { skillsData2 } from "../../data/languagesData";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import Section from "../../components/Section";
import { techStack } from "../../data/techStack";

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
      <Reveal>
        {Object.entries(skillsData2).map(([category, skills]) => (
          <div className="block lg:flex gap-10 mb-10 " key={category}>
            <div className="w-fit lg:w-[12%] mb-5 lg:mb-0">
              <div className=" rounded-lg border border-indigo-400 text-white font-semibold  text-center px-2 lg:p-3 capitalize w-full">
                {category}
              </div>
            </div>
            <div className="grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-3 lg:gap-5 w-full">
              {skills.map((skill) => {
                return (
                  <div
                    className=" flex flex-col md:flex-row items-center  h-fit rounded-lg bg-indigo-800/50  p-2 md:p-2.5 gap-1 md:gap-x-1.5"
                    key={skill}
                    style={{
                      boxShadow: `-2px -2px 4px ${techStack[skill].shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                    }}>
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                        techStack[skill].image
                      }`}
                      alt={`skill-${skill.name}`}
                      className=" h-7  md:h-8"
                    />
                    <p className=" font-normal text-xs sm:text-sm lg:text-base">
                      {techStack[skill].name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default Skills;
