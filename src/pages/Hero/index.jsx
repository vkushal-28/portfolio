/* eslint-disable react/no-unescaped-entities */
// components
import resume from "../../assets/resume/Kushal_Vala_Resume.pdf";
import * as Imgs from "../../assets/images/index";
import { fadeIn } from "../../helpers/variants";
import { useNav } from "../../hooks/useNav";
import Typewriter from "typewriter-effect";
import Reveal from "../../components/Reveal";

const Hero = () => {
  // hooks
  const homeRef = useNav("Home");

  return (
    <section className="bg-primary header" ref={homeRef} id="homeSection">
      {/* text */}
      <div className="  bg-explosion bg-cover w-full h-[100vh]  bg-no-repeat  ">
        <div className="text-center flex flex-col justify-center items-center lg:pt-32 xl:pt-36 md:text-left h-full container mx-auto ">
          <div className="grid grid-cols-0 sm:grid-cols-12 gap-0 sm:gap-2 md:gap-0 ">
            <div className="col-span-0 sm:col-span-6 md:col-span-7 md:gap-2 h-full ">
              {/* title */}
              <Reveal direction="down" className="h1 mb-1 ">
                Hi There! I'm <br />
                <span className=" gradient-text">Kushal Vala</span>
              </Reveal>
              <Reveal
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-lg lg:text-3xl mb-3 ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        "<strong><span style=color:#28B463; font-size=14px>Web Developer</span></strong>"
                      )
                      .pauseFor(500)
                      .deleteAll()
                      .typeString(
                        "<strong><span style=color:#F39C12 font-size:14px>Front End Developer</span></strong>"
                      )
                      .pauseFor(500)
                      .deleteAll()
                      .typeString(
                        "<strong><span style=color:#17c0e9>React JS Developer</span></strong>"
                      )
                      .pauseFor(500)
                      .deleteAll()
                      .typeString(
                        "<strong><span style=color:#F39C12>Next JS Developer</span></strong>"
                      )
                      .pauseFor(500)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Reveal>
              <Reveal
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" max-w-sm xl:max-w-xl mx-auto md:mx-0 mb-5 md:mb-8 text-center md:text-justify lg:text-start">
                <p>
                  I'm a web developer with a focus on the Full Stack, but still
                  exploring other technologies and frameworks that catch my
                  interest! if you're looking for a developer to add to your
                  team, I'd love to hear from you!
                </p>
              </Reveal>
              <Reveal direction="up" className=" mb-3 ">
                <div className="h-[40px] w-[150px] rounded-md   mx-auto md:mx-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 px-[2px] pt-[2px] pb-[2.5px]">
                  <button
                    type="button"
                    className=" bg-bl rounded w-full h-full ">
                    <a
                      href={resume}
                      target="_blank"
                      className="py-2"
                      rel="noreferrer">
                      Download CV
                    </a>
                  </button>
                </div>
              </Reveal>
            </div>
            <div className="md:flex items-center w-full sm:col-span-6 md:col-span-5 hidden ">
              <Reveal direction="left" className="w-full ">
                <img src={Imgs.webTech} alt="hero-img" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
