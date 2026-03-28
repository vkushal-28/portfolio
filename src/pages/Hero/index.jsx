import * as Imgs from "../../assets/images/index";
import { fadeIn } from "../../utils/variants";
import { useNav } from "../../hooks/useNav";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import {
  RiArrowDownDoubleFill,
  RiFolder3Fill,
  RiMailSendFill,
  RiArrowRightLine,
} from "react-icons/ri";
import TiltCard from "react-parallax-tilt";
import { useState, useEffect } from "react";

const Hero = () => {
  const homeRef = useNav("Home");

  const resume = `${
    import.meta.env.VITE_IMAGE_URL
  }resume/Resume-KUSHAL-VALA.pdf`;

  // Animated typewriter component
  const TypewriterText = () => {
    const roles = [
      { text: "Senior Frontend Engineer", color: "#F97316" },
      { text: "Fullstack Developer", color: "#66D0BC" },
      { text: "React.js Specialist", color: "#22d3ee" },
      { text: "Next.js Expert", color: "#E7DEAF" },
      { text: "Node.js Engineer", color: "#83CD29" },
    ];

    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentRole = roles[index];
      const text = currentRole.text;

      const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            if (displayedText.length < text.length) {
              setDisplayedText(text.substring(0, displayedText.length + 1));
            } else {
              setTimeout(() => setIsDeleting(true), 2000);
            }
          } else {
            if (displayedText.length > 0) {
              setDisplayedText(text.substring(0, displayedText.length - 1));
            } else {
              setIsDeleting(false);
              setIndex((prev) => (prev + 1) % roles.length);
            }
          }
        },
        isDeleting ? 50 : 80
      );

      return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index]);

    return (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        style={{ color: roles[index].color }}
        transition={{ duration: 0.3 }}>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1">
          |
        </motion.span>
      </motion.span>
    );
  };

  return (
    <section className="bg-primary header" ref={homeRef} id="homeSection">
      <div className="bg-explosion w-[100vw] h-[100vh] bg-cover bg-no-repeat relative">
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/30"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="text-center flex flex-col justify-center items-center md:text-left h-full container mx-auto transition-all delay-150 relative z-10">
          <div className="grid grid-cols-1 sm:gap-2 lg:grid-cols-12 lg:gap-0">
            <div className="flex flex-col justify-center col-span-1 lg:col-span-7 h-full">
              {/* Availability Status */}
              <Reveal direction="down"
                className="mb-3 ">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full max-sm:mt-3 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-medium backdrop-blur-sm shadow-lg shadow-emerald-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to new challenges
                </span>
              </Reveal>

              {/* Tagline */}
              <Reveal direction="down"
                className="text-indigo-300 text-sm md:text-base font-medium mb-2 tracking-wide uppercase">
                Full Stack Developer & UI Enthusiast
              </Reveal>

              <Reveal direction="down" className="h1 mb-1">
                Hi There! I'm <br />
                <span className="gradient-text">Kushal Vala</span>
              </Reveal>

              {/* Modern animated role display */}
              <Reveal
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-3">
                <div className="text-lg md:text-xl lg:text-2xl font-semibold h-10 md:h-8 flex items-center  max-md:justify-center text-gray-300">
                  <span className="mr-2 text-white">→</span>
                  <TypewriterText />
                </div>
              </Reveal>

              {/* Experience/Stats badge */}
              {/* <Reveal
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-3">
                <span className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                  <span>6+ Years Experience</span>
                </span>
              </Reveal> */}

              <Reveal
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto md:mx-0 mb-0 md:mb-8 text-center md:text-start">
                <p className="text-gray-400 max-sm:hidden">
                  Bridging creativity and engineering to build seamless,
                  high‑impact web experiences. Every line of code I write aims
                  for clarity, performance, and purpose.
                </p>
              </Reveal>

              {/* Button Group */}
              <Reveal direction="up" className="mb-5">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* Download CV Button - Primary */}
                  <motion.a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg shadow-indigo-500/30 overflow-hidden transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    {/* Animated shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    {/* Glow border */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.1)",
                      }}
                    />
                    <RiArrowDownDoubleFill className="relative z-10 text-lg animate-bounce" />
                    <span className="relative z-10 text-sm tracking-wide">
                      Download CV
                    </span>
                  </motion.a>

            <div className="max-md:flex max-md:justify-between gap-3">

                  {/* View Projects Button */}
                  <motion.a
                    className="group relative inline-flex items-center justify-center gap-2 px-2 md:px-5 py-2  bg-white/5 border border-indigo-400/30 rounded-lg font-semibold text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white overflow-hidden transition-all duration-300 max-md:w-full lg:mr-4"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document
                        .getElementById("projectsSection")
                        .scrollIntoView({ behavior: "smooth" });
                    }}>
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <RiFolder3Fill className="relative z-10 text-lg group-hover:scale-110 transition-transform" />
                    <span className="relative z-10 text-sm tracking-wide">
                      My Work
                    </span>
                    <RiArrowRightLine className="relative z-10 text-lg group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  {/* Get in Touch Button */}
                  <motion.a
                    href="#contactSection"
                    className="group relative inline-flex items-center justify-center gap-2 px-2 md:px-5  py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg font-semibold text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400 overflow-hidden transition-all duration-300 max-md:w-full"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    {/* Animated glow */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
                        filter: "blur(6px)",
                      }}
                    />
                    <RiMailSendFill className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10 text-sm tracking-wide">
                      Get in Touch
                    </span>
                    {/* Hover border pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        border: "1px solid rgba(34, 211, 238, 0.5)",
                        boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
                      }}
                    />
                  </motion.a>
</div>

                </div>
              </Reveal>
            </div>

{/*  */}
            <div className="flex w-full items-center justify-center col-span-1 max-lg:order-first lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                <TiltCard>
                  <div className="relative">
                    {/* Glassmorphism container for AI icons */}
                    <div className="absolute -inset-16 md:-inset-20 flex items-center justify-center pointer-events-none">
                      <div className="relative w-64 h-64 md:w-80 md:h-80  flex items-center justify-center">
                        {/* Cursor AI - Top Left */}
                        <motion.div
                          className="absolute top-[10px] lg:-top-[50px] -left-[16px]  md:-left-[30px]  xl:-left-[100px] w-10 h-10 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg flex items-center justify-center overflow-hidden"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <img
                            src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                            Imgs.cursor
                          }`}
                            alt="Cursor AI"
                            className="w-6 h-6 md:w-10 md:h-10 object-contain z-50"
                          />
                        </motion.div>

                        {/* Copilot - Bottom Right */}
                        <motion.div
                          className="absolute bottom-2 right-0 lg:-bottom-18 xl:-bottom-24 lg:-right-12 w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg flex items-center justify-center overflow-hidden"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        >
                          <img
                           src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                            Imgs.copilot
                          }`}
                            alt="GitHub Copilot"
                            className="w-6 h-6 md:w-10 md:h-10  object-contain z-50"
                          />
                        </motion.div>

                        {/* Cursor - Top Right */}
                        <motion.div
                          className="absolute top-[30px] lg:-top-[10px] -right-[0px]  lg:-right-[30px] xl:-right-[80px] w-10 h-10 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg flex items-center justify-center overflow-hidden"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        >
                          <img
                            src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                            Imgs.claude
                          }`}
                            alt="Cursor AI"
                            className="w-6 h-6 md:w-10 md:h-10  object-contain z-50 animate-spin-slow"
                          />
                        </motion.div>
                      </div>
                    </div>

                    <img
                      src={Imgs.profilebg}
                      alt="hero-img"
                      className="w-64 lg:w-full drop-shadow-2xl relative z-10"
                    />
                    {/* Floating accent elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-xl"
                      animate={{
                        y: [0, 10, 0],
                        x: [0, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Cylinder with centered dot */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 max-sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}>
          <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-medium">
            Scroll
          </span>
          <div className="relative">
            {/* Cylinder shape */}
            <div className="relative w-8 h-14 rounded-[1.25rem] bg-gradient-to-b from-gray-800/60 to-gray-900/60 border border-indigo-400/10 overflow-hidden backdrop-blur-sm shadow-lg shadow-indigo-500/5">
              {/* Inner glow/shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent opacity-50" />
              {/* Moving dot centered */}
              <motion.div
                className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg shadow-indigo-400/50"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Top cap highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-indigo-400/30 blur-[1px]" />
              {/* Bottom cap shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-black/30 blur-[1px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
