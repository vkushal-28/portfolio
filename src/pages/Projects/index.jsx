import PropTypes from "prop-types";
import Section from "../../components/Section";
import WorkSlider from "./component/WorkSlider";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";

const Projects = () => {
  const projectRef = useNav("Projects");
  return (
    <Section
      sectionRef={projectRef}
      id="projectsSection"
      title1={"My"}
      title2={"Work."}
      description={
        "Step into the core of my digital domain, where code springs to life, and concepts evolve into engaging experiences. Dive into a varied collection of projects, each contains of different technologies and creativity.  These projects endeavors exemplify my enthusiasm for innovation, creativity and adept problem-solving."
      }>
      <div className=" h-full w-full flex flex-col lg:flex-row items-center justify-around gap-6 ">
        <Reveal direction="up" delay={0.2} className="w-full h-full">
          <WorkSlider />
        </Reveal>
      </div>
    </Section>
  );
};

Projects.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
export default Projects;
