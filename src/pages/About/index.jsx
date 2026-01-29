import { useRef, useState } from "react";
import CountUpCard from "./AboutComponents/CountUpCard";
import Experience from "./AboutComponents/Experience";
import Credentials from "./AboutComponents/Credentials";
import { useNav } from "../../hooks/useNav";
import Certificates from "./AboutComponents/Certificates";
import Awards from "./AboutComponents/Awards";
import Reveal from "../../components/Reveal";
import dots from "../../assets/images/decoration/shady-dot.png";
import dots2 from "../../assets/images/decoration/footer-dotted-right-img.png";
const aboutData = [
  {
    id: 0,
    title: "Experience",
  },
  {
    id: 1,
    title: "Certifications",
  },
  {
    id: 2,
    title: "Credentials",
  },
  {
    id: 3,
    title: "Awards",
  },
];

const countUpCardData = [
  {
    id: 1,
    startCount: 0,
    endCount: 6,
    title: "Years of experience",
  },
  {
    id: 2,
    startCount: 0,
    endCount: 14,
    title: "Satisfied Clients",
  },
  {
    id: 3,
    startCount: 0,
    endCount: 27,
    title: "Finished Projects",
  },
  // {
  //   id: 4,
  //   startCount: 0,
  //   endCount: 1,
  //   title: "Winning Awards",
  // },
];

const About = () => {
  // hooks
  const aboutRef = useNav("About");
  const btnRefs = useRef([]);

  // state variables
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const activeBtn = btnRefs.current[index];

  return (
    <section
      className="min-h-full xl:h-[100vh] bg-blLight relative"
      ref={aboutRef}
      id="aboutSection">
      {/* <div className=" xl:h-full bg-pink-500 opacity-90 text-center xl:text-left  lg:rounded-br-[10%] "> */}
      <img src={dots} className="absolute lg:w-[25%]" />
      <div className=" h-full xl:h-full bg-bl py-32 text-center xl:text-left  lg:rounded-br-[11%] ">
        <div className="container mx-auto h-full flex flex-col items-start xl:flex-row gap-x-6 transition-all delay-150 ">
          <div className="flex-1 flex flex-col justify-center w-full transition-all delay-150">
            <Reveal direction="right" className="h2">
              <span className="gradient-text">Crafting</span> Seamless User
              Experiences with Precision
            </Reveal>
            <Reveal
              direction="right"
              delay={0.4}
              className="sm:w-full md:w-[700px] xl:w-[580px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              <p>
                {/* Hi there! I'm Kushal Vala. I'm a passionate and experienced
                full-stack developer crafting dynamic and responsive web
                applications. My journey in the world of coding began before 6
                years ago with a fascination for turning ideas into functional,
                user-friendly digital experiences. Armed with expertise in both
                front-end and back-end technologies, I thrive on the challenges
                of creating seamless and intuitive solutions. Let's collaborate
                and bring your digital vision to life! */}
                My journey as a developer began with a passion for turning ideas
                into interactive experiences. Over the past 6 years, I’ve grown
                into a Full‑Stack Developer specializing in the MERN stack,
                driven by the art of writing clean code and crafting thoughtful
                designs. Every project has taught me the value of best
                practices, collaboration, and constant learning — and that
                curiosity continues to push me to build smarter, better, and
                more meaningful digital solutions.
              </p>
            </Reveal>

            {/* counters */}
            <Reveal
              direction="right"
              delay={0.6}
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 transition-all delay-150">
              <div className="flex justify-center w-full xl:gap-x-7">
                {countUpCardData.map((data, i) => (
                  <CountUpCard
                    key={data.id}
                    start={data.startCount}
                    end={data.endCount}
                    details={data.title}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* info */}

          <Reveal
            direction="left"
            delay={0.4}
            className="flex flex-col w-full xl:max-w-[50%] h-full over pt-5 pb-5 lg:pt-4">
            <div className="relative flex w-full rounded-full bg-indigo-900/50 p-1 mb-2 overflow-auto">
              <div
                className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-pink-500 shadow-sm transition-all duration-200 ease-out"
                style={
                  isMobile
                    ? {
                        width: `${activeBtn?.offsetWidth}px`,
                        transform: `translateX(${activeBtn?.offsetLeft}px)`,
                      }
                    : {
                        width: `calc(100% / ${aboutData.length})`,
                        transform: `translateX(${index * 98}%)`,
                      }
                }
              />

              {aboutData.map((item, itemInd) => (
                <button
                  key={itemInd}
                  ref={(el) => (btnRefs.current[itemInd] = el)}
                  onClick={() => setIndex(itemInd)}
                  className={`z-10 px-3 pt-2 pb-3 font-medium rounded-full transition-colors capitalize max-sm:text-sm w-full
      ${index === itemInd ? "text-white" : "text-white hover:text-white"}`}>
                  {item.title}
                </button>
              ))}
            </div>

            {/* <div className="inline-flex rounded-full bg-gray-100 p-1">
              {aboutData.map((item, itemInd) => {
                return (
                  <div
                    key={itemInd}
                    className={` ${
                      index === item.id
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-500 hover:text-black"
                    } px-6 py-2 text-sm font-medium rounded-full transition-all`}
                    onClick={() => setIndex(itemInd)}>
                    {item.title}
                  </div>
                );
              })}
            </div> */}
            {/* <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 md:mb-1 z-10  w-full overflow-x-scroll no-scrollbar pb-3 transition-all delay-150">
              {aboutData.map((item, itemInd) => {
                return (
                  <div
                    key={itemInd}
                    className={` ${
                      index === item.id
                        ? " text-pink-500 after:w-[100%] after:bg-pink-500 after:transition-all after:duration-300 "
                        : "after:bg-white"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemInd)}>
                    {item.title}
                  </div>
                );
              })}
            </div> */}
            <div className="p-2 xl:p-3 flex flex-col gap-y-0 xl:gap-y-4 items-start h-full overflow-y-scroll">
              {aboutData[index].id === 0 && <Experience />}
              {aboutData[index].id === 1 && <Certificates />}
              {aboutData[index].id === 2 && <Credentials />}
              {aboutData[index].id === 3 && <Awards />}
            </div>
          </Reveal>
        </div>
      </div>
      {/* <img src={dots2} className="absolute lg:w-[25%] bottom-40 right-0 " /> */}

      {/* </div> */}
    </section>
  );
};

export default About;
