import { skillsData2 } from "../../data/languagesData";
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
      <div className="h-full bg-bl py-20 md:py-32 text-center rounded-tl-none  md:rounded-tl-[10%] rounded-br-none md:rounded-br-[10%] ">
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
              <div className="block lg:flex gap-10 mb-10 ">
                <div className="w-fit lg:w-[12%] mb-5 lg:mb-0">
                  <div
                    className=" rounded-lg border border-indigo-400 text-white font-semibold  text-center px-2 lg:p-3 capitalize w-full"
                    // style={{
                    //   boxShadow: `-2px -2px 4px #fff, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                    // }}
                    // className="font-bold text-2xl"
                  >
                    {category}
                  </div>
                </div>
                <div className="grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-3 lg:gap-5 w-full">
                  {skills.map((skill) => {
                    return (
                      <div
                        className=" flex flex-col md:flex-row items-center  h-fit rounded-lg bg-indigo-800/50  p-2 md:p-2.5 gap-1 md:gap-x-1.5"
                        key={skill.id}
                        style={{
                          boxShadow: `-2px -2px 4px ${skill.shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                        }}>
                        <img
                          src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                            skill.icon
                          }`}
                          alt={`skill-${skill.id}`}
                          className=" h-7  md:h-8"
                        />
                        <p className=" font-normal text-xs sm:text-sm lg:text-base">
                          {skill.name}
                        </p>
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
