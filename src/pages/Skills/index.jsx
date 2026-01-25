import { skillsData, skillsData2 } from "../../data/languagesData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";

const Skills = () => {
  // hooks
  const skillsRef = useNav("Skills");

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
            {Object.entries(skillsData2).map(([category, skills]) => (
              <div className="block md:flex gap-10 mb-14 lg:mb-10">
                <div className="w-[150px] lg:w-[15%] mb-5 lg:mb-0">
                  <p
                    className=" rounded-lg bg-indigo-600/60 text-white font-semibold  text-center p-3.5 capitalize"
                    style={{
                      boxShadow: `-2px -2px 4px #fff, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                    }}
                    // className="font-bold text-2xl"
                  >
                    {category}
                  </p>
                </div>
                <div className="flex flex-1 flex-wrap  gap-5 lg:gap-8">
                  {skills.map((skill) => {
                    return (
                      <div
                        className=" flex items-center min-w-[120px] h-fit rounded-lg bg-indigo-900/50  p-3 gap-2"
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
                        <p className=" font-normal ">{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Skills;
