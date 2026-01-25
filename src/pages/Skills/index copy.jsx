import { skillsData } from "../../data/languagesData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import Marquee from "react-fast-marquee";

const Skills = () => {
  // hooks
  const skillsRef = useNav("Skills");

  const firstRow = skillsData.slice(0, skillsData.length / 3);

  return (
    <div
      className="h-full bg-blLight "
      style={{ height: "fit-content" }}
      ref={skillsRef}
      id="skillsSection">
      <div className="h-full bg-bl py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] ">
        <div className=" mx-auto container  text-center transition-all delay-150">
          <CommonHeader
            title1={"My"}
            title2={"Skills."}
            description={
              "In the dynamic realm of technology, I bring a versatile set of skills that fuse creativity with technical proficiency. My expertise encompasses a range of programming languages, frameworks, and tools, allowing me to navigate and excel in diverse development environments."
            }
          />
          <Reveal>
            <div className="flex flex-1 flex-wrap justify-center gap-5 lg:gap-8">
              {skillsData.map((skill) => {
                return (
                  <div
                    className=" flex items-center min-w-[120px] rounded-lg bg-indigo-900/50   p-3 gap-2"
                    key={skill.id}
                    style={{
                      boxShadow: `-2px -2px 4px ${skill.shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                    }}>
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                        skill.icon
                      }`}
                      alt={`skill-${skill.id}`}
                      className=" w-7 h-7  md:w-8  md:h-8 "
                    />
                    <p className=" font-normal max-sm:hidden">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Skills;
