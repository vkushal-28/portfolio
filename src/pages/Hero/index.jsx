/* eslint-disable react/no-unescaped-entities */
// components
import * as Imgs from "../../assets/images/index";
import { fadeIn } from "../../helpers/variants";
import { useNav } from "../../hooks/useNav";
import Typewriter from "typewriter-effect";
import Reveal from "../../components/Reveal";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import TiltCard from "react-parallax-tilt";

const Hero = () => {
  // hooks
  const homeRef = useNav("Home");

  const resume = `${
    import.meta.env.VITE_IMAGE_URL
  }resume/Resume-KUSHAL-VALA.pdf`;

  return (
    <section className="bg-primary header " ref={homeRef} id="homeSection">
      <div className="  bg-explosion  w-[100vw] h-[100vh] bg-cover bg-no-repeat  ">
        <div className="text-center flex flex-col justify-center items-center  md:text-left h-full container mx-auto transition-all delay-150">
          {/* lg:pt-32 xl:pt-36 */}
          <div className="grid grid-cols-0 sm:grid-cols-12 gap-0 sm:gap-2 md:gap-0">
            <div className="flex flex-col  justify-center col-span-0 sm:col-span-6 md:col-span-7 md:gap-2 h-full ">
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
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" max-w-sm xl:max-w-xl mx-auto md:mx-0 mb-5 md:mb-8 text-center md:text-justify lg:text-start">
                <p>
                  {/* I'm a web developer with a focus on the Full Stack, but still
                  exploring other technologies and frameworks that catch my
                  interest! if you're looking for a developer to add to your
                  team, I'd love to hear from you! */}
                  Bridging creativity and engineering to build seamless,
                  high‑impact web experiences. Every line of code I write aims
                  for clarity, performance, and purpose.
                </p>
              </Reveal>
              <Reveal direction="up" className=" mb-3 ">
                <div className="h-[40px] w-[180px] rounded-md   mx-auto md:mx-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 px-[2px] pt-[2px] pb-[2.5px]">
                  <button
                    type="button"
                    className=" bg-bl rounded w-full h-full flex items-center justify-center gap-x-2 ">
                    <RiArrowDownDoubleFill className="animate-bounce size-6" />
                    <a
                      href={resume}
                      target="_blank"
                      className="py-2 pr-2"
                      rel="noreferrer">
                      Download CV
                    </a>
                  </button>
                </div>
              </Reveal>
            </div>
            <div className="md:flex  w-full sm:col-span-6 md:col-span-5 justify-center  max-sm:order-first">
              <Reveal
                direction="left"
                className="md: w-full  max-sm:px-16 transition-colors delay-150">
                <çTiltCard>
                  <img src={Imgs.profilebg} alt="hero-img  " />
                </çTiltCard>
                {/* <img src={Imgs.webTech} alt="hero-img" /> */}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
