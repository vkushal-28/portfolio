import { skillsData } from "../../data/languagesData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";

const Skills = () => {
  // hooks
  const skillsRef = useNav("Skills");

  return (
    <div
      className="h-full bg-blLight"
      style={{ height: "fit-content" }}
      ref={skillsRef}
      id="skillsSection">
      <div className="h-full  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
        <div className="h-full bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] ">
          <div className="h-full bg-bl py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] ">
            <div className="container mx-auto">
              <div className="container mx-auto  text-center">
                <CommonHeader
                  title1={"My"}
                  title2={"Skills."}
                  description={
                    "In the dynamic realm of technology, I bring a versatile set of skills that fuse creativity with technical proficiency. My expertise encompasses a range of programming languages, frameworks, and tools, allowing me to navigate and excel in diverse development environments."
                  }
                />
                <Reveal>
                  <div className="flex  flex-auto flex-wrap justify-center gap-5 md:gap-10 lg:gap-12">
                    {skillsData.map((skill) => {
                      return (
                        <div
                          className="w-[60px] md:w-[80px] xl:w-[100px] h-[60px] md:h-[80px] xl:h-[100px] flex justify-center rounded-full bg-indigo-900/50"
                          key={skill.id}
                          style={{
                            boxShadow: `-2px -2px 4px ${skill.shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                          }}>
                          <img
                            src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                              skill.icon
                            }`}
                            alt={`skill-${skill.id}`}
                            className="w-full p-4 max-md:p-3"
                          />
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
