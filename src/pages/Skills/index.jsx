import { skillsData } from "../../data/languagesData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import Marquee from "react-fast-marquee";

const Skills = () => {
  // hooks
  const skillsRef = useNav("Skills");

  const firstRow = skillsData.slice(0, skillsData.length / 3);

  const secondRow = skillsData.slice(firstRow.length, firstRow.length * 2);

  const thirdRow = skillsData.slice(firstRow.length * 2, skillsData.length);

  return (
    <div
      className="h-full bg-blLight"
      style={{ height: "fit-content" }}
      ref={skillsRef}
      id="skillsSection">
      <div className="h-full  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
        <div className="h-full bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] ">
          <div className="h-full bg-bl py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] ">
            <div className=" mx-auto container  text-center">
              <CommonHeader
                title1={"My"}
                title2={"Skills."}
                description={
                  "In the dynamic realm of technology, I bring a versatile set of skills that fuse creativity with technical proficiency. My expertise encompasses a range of programming languages, frameworks, and tools, allowing me to navigate and excel in diverse development environments."
                }
              />
              <Reveal>
                <Marquee
                  className=" h-[145px] max-md:h-[110px] "
                  pauseOnHover={true}
                  speed={20}
                  play="true"
                  gradient
                  gradientWidth={150}
                  autoFill
                  gradientColor="#131430">
                  {firstRow.map((skill) => {
                    return (
                      <div
                        className="w-[60px] md:w-[80px] xl:w-[100px] h-[60px] md:h-[80px] xl:h-[100px] flex justify-center rounded-full bg-indigo-900/50 mx-8 max-md:mx-4"
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
                </Marquee>
                <Marquee
                  className=" h-[145px] max-md:h-[110px] "
                  pauseOnHover={true}
                  speed={20}
                  play="true"
                  gradient
                  direction="right"
                  gradientWidth={150}
                  autoFill
                  gradientColor="#131430">
                  {secondRow.map((skill) => {
                    return (
                      <div
                        className="w-[60px] md:w-[80px] xl:w-[100px] h-[60px] md:h-[80px] xl:h-[100px] flex justify-center rounded-full bg-indigo-900/50 mx-8 max-md:mx-4"
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
                </Marquee>

                <Marquee
                  className=" h-[145px] max-md:h-[110px] max-sm:h-[100px]"
                  pauseOnHover={true}
                  speed={20}
                  play="true"
                  gradient
                  gradientWidth={150}
                  autoFill
                  gradientColor="#131430">
                  {thirdRow.map((skill) => {
                    return (
                      <div
                        className="w-[60px] md:w-[80px] xl:w-[100px] h-[60px] md:h-[80px] xl:h-[100px] flex justify-center rounded-full bg-indigo-900/50 mx-8 max-md:mx-4"
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
                </Marquee>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
