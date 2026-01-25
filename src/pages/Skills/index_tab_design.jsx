import { useState } from "react";
import { skillsData } from "../../data/languagesData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools & Testing" },
];

const Skills = () => {
  const skillsRef = useNav("Skills");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = categories[activeIndex].id;

  const filteredSkills = skillsData.filter(
    (skill) => skill.type === activeCategory
  );

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
            {/* ================= Layout ================= */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-20 mt-10">
              {/* ================= Category Tabs ================= */}
              <div
                className="
                  relative flex rounded-3xl bg-indigo-900/50 p-1
                  flex-row lg:flex-col
                  lg:w-64 lg:self-start lg:h-fit
                "
                style={{
                  "--count": categories.length,
                  "--index": activeIndex,
                }}>
                {/* Sliding Indicator */}
                <div
                  className="
                    absolute left-1 top-1 rounded-full bg-pink-500 shadow-sm
                    transition-transform duration-150 ease-out

                    /* Horizontal (mobile < lg) */
                    h-[calc(100%-8px)]
                    w-[calc((100%-8px)/var(--count))]
                    translate-x-[calc(var(--index)*100%)]

                    /* Vertical (lg+) */
                    lg:w-[calc(100%-8px)]
                    lg:h-[calc((100%-8px)/var(--count))]
                    lg:translate-x-0
                    lg:translate-y-[calc(var(--index)*100%)]
                  "
                />

                {categories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`
                      relative z-10 flex-1 px-4 py-2
                      font-medium capitalize rounded-full
                      text-center transition-colors
                      ${
                        activeIndex === idx
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }
                    `}>
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* ================= Skills Grid ================= */}
              <div className="flex flex-1 flex-wrap gap-5 lg:gap-8 justify-center lg:justify-start">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center min-w-[120px] rounded-lg bg-indigo-900/50 p-3 gap-2"
                    style={{
                      boxShadow: `-2px -2px 4px ${skill.shadow_color}, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                    }}>
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                        skill.icon
                      }`}
                      alt={skill.name}
                      className="w-7 h-7 md:w-8 md:h-8"
                    />
                    <p className="font-normal max-sm:hidden">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Skills;
