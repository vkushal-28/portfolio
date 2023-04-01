import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { images } from "../../images/allImages";
import { projectData } from "../../data/projectsData";

const Projects = () => {
  const oo = [
    { name: "React JS", tech: "react", ima: images.reactImg },
    { name: "Next JS", tech: "next", ima: images.nextImg },
    { name: "Node JS", tech: "node", ima: images.nodeImg },
    { name: "Javascript", tech: "js", ima: images.js },
    { name: "CSS", tech: "css", ima: images.cssImg },
    { name: "Express JS", tech: "express", ima: images.expressImg },
    { name: "HTML", tech: "html", ima: images.htmlImg },
    { name: "Bootstrap", tech: "bootstrap", ima: images.bootstrapImg },
    { name: "Redux", tech: "redux", ima: images.reduxImg },
    { name: "npm", tech: "npm", ima: images.npmImg },
    { name: "MongoDB", tech: "mongo", ima: images.mongoImg },
  ];

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    // autoplay: true,
    loop: true,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };

  return (
    // #d960a2
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h2>Check Out My Reacet Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row">
        {projectData?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectData?.map((details) => (
              <div className="project shadow mb-3 mt-2" data-aos="fade-up">
                <div className="project-img">
                  <img src={details.about_avatar} alt="" className="work-img" />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    {details.language_used.map((i) => {
                      const skillsObj = oo.find((d) => d.tech === i);
                      return (
                        <img
                          style={{ width: "8%", marginRight: "6px" }}
                          src={skillsObj?.ima || "no"}
                          title={skillsObj.name}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info mt-2">{details.Project_info}</p>
                  <div className="project-links">
                    {details.demo_link && (
                      <a
                        href={details.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6 className="learnmore">
                          <i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                          Live Preview
                        </h6>
                      </a>
                    )}
                    {details.project_link && (
                      <a
                        href={details.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6 className="learnmore">
                          <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                          Source Code
                        </h6>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
