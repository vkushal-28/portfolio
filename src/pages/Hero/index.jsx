/**
 * Hero Component - Main landing section with animations and CTAs
 */
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useNav } from "../../hooks/useNav";
import {
  RiArrowDownDoubleFill,
  RiFolder3Fill,
  RiMailSendFill,
} from "react-icons/ri";
import { fadeIn } from "../../utils/variants";
import Reveal from "../../components/Reveal";

import { profilebg, cursor, copilot, claude } from "../../assets/images/index";

// Lazy load heavy 3D tilt component
const TiltCard = lazy(() => import("react-parallax-tilt"));

// Local components
import TypewriterText from "./components/TypewriterText";
import AIToolsDisplay from "./components/AIToolsDisplay";
import ScrollIndicator from "./components/ScrollIndicator";
import AnimatedButton from "./components/AnimatedButton";
import FloatingParticles from "./components/FloatingParticles";

// Pre-computed URLs
const RESUME_URL = `${import.meta.env.VITE_IMAGE_URL}resume/Resume-KUSHAL-VALA.pdf`;

const getS3Url = (filename) =>
  `${import.meta.env.VITE_IMAGE_URL}skills/${filename}`;
const AI_TOOL_IMAGES = {
  cursor: getS3Url(cursor),
  copilot: getS3Url(copilot),
  claude: getS3Url(claude),
};

const Hero = () => {
  const homeRef = useNav("Home");

  return (
    <section className="bg-primary header" ref={homeRef} id="homeSection">
      <div className="bg-explosion w-[100vw] h-[100vh] bg-cover bg-no-repeat relative">
        {/* Background particle animation */}
        <FloatingParticles />

        <div className="text-center flex flex-col justify-center items-center md:text-left h-full container mx-auto transition-all delay-150 relative z-10">
          <div className="grid grid-cols-1 sm:gap-2 lg:grid-cols-12 lg:gap-0">
            {/* Content column (7 cols on large screens) */}
            <div className="flex flex-col justify-center col-span-1 lg:col-span-7 h-full">
              <Reveal direction="down" className="mb-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full max-sm:mt-3 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-medium backdrop-blur-sm shadow-lg shadow-emerald-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Open to new challenges
                </span>
              </Reveal>

              <Reveal
                direction="down"
                className="text-indigo-300 text-sm md:text-base font-medium mb-2 tracking-wide uppercase">
                Full Stack Developer & UI Enthusiast
              </Reveal>

              <Reveal direction="down" className="h1 mb-1">
                Hi There! I'm <br />
                <span className="gradient-text">Kushal Vala</span>
              </Reveal>

              {/* Typewriter animation with rotating roles */}
              <Reveal
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-3">
                <div className="text-lg md:text-xl lg:text-2xl font-semibold h-10 md:h-8 flex items-center max-md:justify-center text-gray-300">
                  <span className="mr-2 text-white">→</span>
                  <TypewriterText />
                </div>
              </Reveal>

              <Reveal
                variants={fadeIn("down", 0.1)}
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

              {/* CTA buttons */}
              <Reveal direction="up" className="mb-5 w-full">
                <div className="flex flex-col md:flex-row gap-4 w-full md:justify-start">
                  {/* Primary CTA: Download CV */}
                  <Suspense
                    fallback={
                      <div className="h-10 px-5 py-2 rounded-lg bg-indigo-600/20 animate-pulse" />
                    }>
                    <AnimatedButton
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      icon={
                        <RiArrowDownDoubleFill className="text-lg animate-bounce-fast" />
                      }
                      className="w-full md:w-auto">
                      Download CV
                    </AnimatedButton>
                  </Suspense>

                  {/* Secondary CTAs container */}
                  <div className="flex flex-row md:flex-row gap-4 w-full md:w-auto">
                    <AnimatedButton
                      variant="secondary"
                      icon={
                        <RiFolder3Fill className="text-lg group-hover:scale-110 transition-transform" />
                      }
                      iconPosition="right"
                      onClick={() => {
                        document
                          .getElementById("projectsSection")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full md:w-auto">
                      My Work
                    </AnimatedButton>
                    <AnimatedButton
                      href="#contactSection"
                      variant="tertiary"
                      icon={
                        <RiMailSendFill className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                      }
                      className="w-full md:w-auto">
                      Get in Touch
                    </AnimatedButton>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Image column (5 cols on large screens, mobile-first on small) */}
            <div className="flex w-full items-center justify-center col-span-1 max-lg:order-first lg:col-span-5">
              <Suspense
                fallback={
                  <div className="w-64 h-64 lg:w-full bg-white/5 rounded-full animate-pulse" />
                }>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}>
                  <TiltCard>
                    <div className="relative">
                      <AIToolsDisplay images={AI_TOOL_IMAGES} />

                      <img
                        src={profilebg}
                        alt="hero profile"
                        className="w-64 lg:w-full drop-shadow-2xl relative z-10"
                      />

                      {/* Floating gradient accent blobs */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"
                        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-xl"
                        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              </Suspense>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
