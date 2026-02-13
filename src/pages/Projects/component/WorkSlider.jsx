import React, { useEffect, useMemo, useState } from "react";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { allProjectsData } from "../../../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "../../../data/techStack";

const WorkSlider = ({ activeTab }) => {
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") {
      return allProjectsData.projects;
    }

    return allProjectsData.projects.filter((project) =>
      project.type.includes(activeTab)
    );
  }, [activeTab]);

  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const ShowProjectDetails = () => {
    return (
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)} // click outside to close
          >
            <motion.div
              className="relative max-w-2xl w-full mx-4 bg-bl  text-left rounded-xl overflow-hidden shadow-xl"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // prevent close on content click
            >
              {/* Image */}
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}projects/${
                  selectedProject.path
                }`}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              {/* Content */}
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {selectedProject.title}
                </h2>

                <p className="text-sm opacity-90 ">
                  {selectedProject.description}
                </p>

                {/* Tech stack */}
                {selectedProject.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-3">
                    {selectedProject.stack.map((tech, i) => (
                      // <span
                      //   key={i}
                      //   className="px-2 py-1 text-xs rounded bg-indigo-500/10 text-indigo-300">
                      //   {tech}
                      // </span>
                      <img
                        src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                          techStack[tech].image
                        }`}
                        alt={techStack[tech].name}
                        key={i}
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3">
                  {selectedProject.demo_link && (
                    <a
                      href={selectedProject.demo_link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-pink-500 text-white hover:bg-pink-600">
                      Live Demo
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-700 text-white hover:bg-gray-600">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1, ease: "easeOut" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {visibleProjects.map((data, index) => {
              return (
                <motion.div
                  key={data.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedProject(data)}>
                  <div
                    direction="up"
                    delay={0.2 * index}
                    className="w-full h-full "
                    key={data.id}>
                    <div
                      className="p-[0.8px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg group transition-all delay-150 transform hover:-translate-y-3  duration-200"
                      key={data.id}>
                      {/* Gradient shadow */}
                      <div className="absolute  inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50 blur-md rounded-lg -z-10   group-hover:opacity-90"></div>

                      <div className=" h-full rounded-lg overflow-hidden  shadow-md text-left bg-bl ">
                        <img
                          className="w-full h-auto "
                          src={`${import.meta.env.VITE_IMAGE_URL}projects/${
                            data.path
                          }`}
                          alt={data.title}
                        />
                        <div className="px-3 py-3">
                          {/* <div className="font-bold  text-left text-xl mb-2">
                  {data.title}
                </div> */}
                          <p className=" text-left line-clamp-2">
                            {data.description}
                          </p>

                          {/* <div className="flex gap-1 mt-3">
                    {data.stack.length > 0 &&
                      data.stack.map((lang, i) => (
                        <img
                          src={`${import.meta.env.VITE_IMAGE_URL}skills/${
                            techStack[lang].image
                          }`}
                          alt=""
                          key={i}
                          width={20}
                          height={20}
                        />
                      ))}
                  </div> */}

                          {data.demo_link && (
                            <div className="w-full text-right">
                              <a
                                href={data.demo_link}
                                target="_blank"
                                rel="noreferrer"
                                className=" relative inline-flex  items-center justify-center mt-2 p-[1.5px] mb-1 me-1 overflow-hidden text-sm   rounded-lg border border-indigo-400 hover:bg-indigo-700 text-white">
                                <span className="relative px-3 py-0.5 transition-all ease-in duration-175  bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                                  <LuCircleArrowOutUpRight /> Live Demo
                                </span>
                              </a>
                            </div>
                          )}
                          {/* {data.project_link && (
                  <a
                    href={data.project_link}
                    target="_blank"
                    rel="noreferrer"
                    className=" relative ml-1 inline-flex items-center justify-center mt-4 p-[1.5px] mb-1 me-1 overflow-hidden text-sm rounded-lg group bg-indigo-500 hover:bg-indigo-600 hover:text-white dark:text-white">
                    <span className="relative px-3 py-0.5 transition-all ease-in duration-175 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                      <FaCode /> Code
                    </span>
                  </a>
                )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {visibleCount < filteredProjects.length && (
          <motion.div
            key="viewMoreButton"
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { delay: 0 } }}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }} // small delay after grid animation
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-3 py-1.5 bg-white text-sm  text-bl rounded-lg hover:bg-gray-200 transition">
              View More...
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <ShowProjectDetails />
    </>
  );
};

export default WorkSlider;
