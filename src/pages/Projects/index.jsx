/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import CommonHeader from "../../components/CommonHeader";
import WorkSlider from "./component/WorkSlider";
import { useNav } from "../../hooks/useNav";

const Projects = () => {
  const projectRef = useNav("Projects");
  return (
    <section
      ref={projectRef}
      id="projectsSection"
      className="min-h-full  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
      <div className="h-full bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] ">
        <div className="h-full bg-blLight py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] ">
          <div className="container mx-auto">
            <CommonHeader
              title1={"My"}
              title2={"Work."}
              description={
                "Step into the core of my digital domain, where code springs to life, and concepts evolve into engaging experiences. Dive into a varied collection of projects, each contains of different technologies and creativity.  These projects endeavors exemplify my enthusiasm for innovation, creativity and adept problem-solving."
              }
            />
            <div className=" h-full w-full flex flex-col lg:flex-row items-center justify-around gap-6 ">
              <WorkSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Projects;
