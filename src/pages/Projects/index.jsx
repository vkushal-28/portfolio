import PropTypes from "prop-types";
import Section from "../../components/Section";
import WorkSlider from "./component/WorkSlider";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import { useRef, useState } from "react";

const Projects = () => {
  const projectRef = useNav("Projects");
  const tabData = [
    {
      id: 0,
      title: "All",
      type: "all",
    },
    {
      id: 1,
      title: "Full-stack",
      type: "fullstack",
    },
    {
      id: 2,
      title: "Front-end",
      type: "frontend",
    },
    {
      id: 3,
      title: "Back-end",
      type: "backend",
    },
  ];
  const btnRefs = useRef([]);

  // state variables
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(tabData[0].type);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const activeBtn = btnRefs.current[activeTab];

  return (
    <Section
      sectionRef={projectRef}
      id="projectsSection"
      title1={"My"}
      title2={"Work."}
      description={
        "Step into the core of my digital domain, where code springs to life, and concepts evolve into engaging experiences. Dive into a varied collection of projects, each contains of different technologies and creativity.  These projects endeavors exemplify my enthusiasm for innovation, creativity and adept problem-solving."
      }>
      <div className="w-full flex justify-center mb-8">
        <div className="relative flex w-fit rounded-full bg-indigo-900/50 p-1 mb-2 overflow-auto">
          <div
            className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-pink-500 shadow-sm transition-all duration-200 ease-out"
            style={
              isMobile
                ? {
                    width: `calc(${activeBtn?.offsetWidth - 5}px)`,
                    transform: `translateX(${activeBtn?.offsetLeft}px)`,
                  }
                : {
                    width: `calc(100% / ${tabData.length})`,
                    transform: `translateX(${activeIndex * 98}%)`,
                  }
            }
          />

          {tabData.map((item, itemInd) => (
            <button
              key={item.type}
              ref={(el) => (btnRefs.current[item.type] = el)}
              onClick={() => {
                setActiveTab(item.type), setActiveIndex(itemInd);
              }}
              className={`z-10  py-2 font-medium rounded-full transition-colors capitalize max-sm:text-sm w-[150px] md:w-[200px]
                  ${
                    activeTab === item.type
                      ? "text-white"
                      : "text-white hover:text-white"
                  }`}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <Reveal direction="up" delay={0.2}>
        <WorkSlider activeTab={activeTab} />
      </Reveal>
    </Section>
  );
};

Projects.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
export default Projects;
