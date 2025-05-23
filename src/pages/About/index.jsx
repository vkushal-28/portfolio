/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import CountUpCard from "./AboutComponents/CountUpCard";
import Experience from "./AboutComponents/Experience";
import Credentials from "./AboutComponents/Credentials";
import { useNav } from "../../hooks/useNav";
import Certificates from "./AboutComponents/Certificates";
import Awards from "./AboutComponents/Awards";
import Reveal from "../../components/Reveal";

const aboutData = [
  {
    id: 0,
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    id: 1,
    title: "Certifications",
    info: [
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    id: 2,
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
  {
    id: 3,
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
];

const countUpCardData = [
  {
    id: 1,
    startCount: 0,
    endCount: 5,
    title: "Years of experience",
  },
  {
    id: 2,
    startCount: 0,
    endCount: 12,
    title: "Satisfied Clients",
  },
  {
    id: 3,
    startCount: 0,
    endCount: 18,
    title: "Finished Projects",
  },
  {
    id: 4,
    startCount: 0,
    endCount: 1,
    title: "Winning Awards",
  },
];

const About = () => {
  // hooks
  const aboutRef = useNav("About");

  // state variables
  const [index, setIndex] = useState(0);

  return (
    <section
      className="min-h-full xl:h-[100vh] bg-blLight "
      ref={aboutRef}
      id="aboutSection">
      <div className=" xl:h-full bg-pink-500 opacity-90 text-center xl:text-left  lg:rounded-br-[10%] ">
        <div className="h-full xl:h-full bg-bl py-32 text-center xl:text-left  lg:rounded-br-[11%] ">
          <div className="container mx-auto h-full flex flex-col items-start xl:flex-row gap-x-6 transition-all delay-150">
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
                  Hi there! I'm Kushal Vala. I'm a passionate and experienced
                  full-stack developer crafting dynamic and responsive web
                  applications. My journey in the world of coding began before 5
                  years ago with a fascination for turning ideas into
                  functional, user-friendly digital experiences. Armed with
                  expertise in both front-end and back-end technologies, I
                  thrive on the challenges of creating seamless and intuitive
                  solutions. Let's collaborate and bring your digital vision to
                  life!
                </p>
              </Reveal>

              {/* counters */}
              <Reveal
                direction="right"
                delay={0.6}
                className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 transition-all delay-150">
                <div className="flex flex-1 xl:gap-x-7">
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
              className="flex flex-col w-full xl:max-w-[50%] h-full over pt-5 lg:pt-0">
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-10  w-full overflow-x-scroll no-scrollbar pb-3 transition-all delay-150">
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
              </div>
              <div className="p-2 xl:p-3 flex flex-col gap-y-0 xl:gap-y-4 items-start h-full overflow-y-scroll">
                {aboutData[index].id === 0 && <Experience />}
                {aboutData[index].id === 1 && <Certificates />}
                {aboutData[index].id === 2 && <Credentials />}
                {aboutData[index].id === 3 && <Awards />}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
