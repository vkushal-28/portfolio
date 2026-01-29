import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { allProjectsData } from "../../../data/projectsData";

const WorkSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
      {allProjectsData.projects.map((data, index) => {
        return (
          <div className="p-[0.8px]   bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg group transition-all delay-150 transform hover:-translate-y-3  duration-200">
            {/* Gradient shadow */}
            <div className="absolute  inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50 blur-md rounded-lg -z-10   group-hover:opacity-90"></div>

            <div className=" h-full rounded-lg overflow-hidden  shadow-md text-left bg-bl ">
              <img
                className="w-full h-auto "
                src={`${import.meta.env.VITE_IMAGE_URL}projects/${data.path}`}
                alt="Sunset in the mountains"
              />
              <div className="px-3 py-3">
                {/* <div className="font-bold  text-left text-xl mb-2">
                  {data.title}
                </div> */}
                <p className=" text-left line-clamp-3">{data.description}</p>
                {/* 
                    <div className="flex gap-1 mt-3">
                      {data.language_used.length > 0 &&
                        data.language_used.map((lang, i) => (
                          <img
                            src={`${
                              import.meta.env.VITE_IMAGE_URL
                            }skills/${lang}`}
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
                      className=" relative inline-flex  items-center justify-center mt-4 p-[1.5px] mb-1 me-1 overflow-hidden text-sm   rounded-lg border border-indigo-400 hover:bg-indigo-700 text-white">
                      <span className="relative px-3 py-0.5 transition-all ease-in duration-175 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                        <LuCircleArrowOutUpRight /> Preview
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
        );
      })}
    </div>
  );
};

export default WorkSlider;
