import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { FaCode, FaGlobe } from "react-icons/fa";

import { allProjectsData } from "../../../data/projectsData";

const WorkSlider = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Swiper
      freeMode={false}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="pb-14 pt-6 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-0 lg:gap-8 cursor-pointer p-6 md:p-4 xl:p-3">
        {allProjectsData.projects.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="p-[0.8px] max-w-sm  bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg group ">
                {/* Gradient shadow */}
                <div className="absolute max-w-sm  inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-50 blur-md rounded-lg -z-10   group-hover:opacity-90"></div>

                <div className="max-w-sm h-full rounded-lg overflow-hidden shadow-md text-left bg-bl ">
                  <img
                    className="w-full h-auto "
                    src={data.path}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-left text-xl mb-2">
                      {data.title}
                    </div>
                    <p className=" text-base text-left line-clamp-5">
                      {data.description}
                    </p>
                    {data.demo_link && (
                      <a
                        href={data.demo_link}
                        target="_blank"
                        rel="noreferrer"
                        class=" relative inline-flex items-center justify-center mt-4 p-[1.5px] mb-1 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  bg-gradient-to-l hover:bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500  hover:text-white dark:text-white  ">
                        <span class="relative px-3 py-0.5 transition-all ease-in duration-175 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                          <FaGlobe /> preview
                        </span>
                      </a>
                    )}
                    {data.project_link && (
                      <a
                        href={data.project_link}
                        target="_blank"
                        rel="noreferrer"
                        class=" relative ml-1 inline-flex items-center justify-center mt-4 p-[1.5px] mb-1 me-1 overflow-hidden text-sm font-medium rounded-lg group bg-indigo-500 hover:bg-indigo-600 hover:text-white dark:text-white">
                        <span class="relative px-3 py-0.5 transition-all ease-in duration-175 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                          <FaCode /> code
                        </span>
                      </a>
                    )}
                  </div>
                  {/* 
                <div className="h-[40px] w-[150px] rounded-md   mx-auto md:mx-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 px-[2px] pt-[2px] pb-[2.5px]">
                  <button
                    type="button"
                    className=" bg-bl rounded w-full h-full ">
                    cdfsdf
                  </button>
                </div> */}
                </div>
              </div>
              {/* <div
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                style={{
                  boxShadow: `-3px -3px 4px #ec4899, 4px 4px 10px rgba(0, 0, 0, 0.5)`,
                }}
                // hover:border-2 hover:border-pink-800
              >
                <div className="flex items-center justify-center relative overflow-hidden group">

                  <img
                    src={data.path}
                    className="object-cover "
                    // width={500}
                    // height={400}
                    alt=""
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-b from-slate-950/50 from-[10%] to-[80%]
                          to-slate-950/95 opacity-0 
                          group-hover:opacity-90 transition-all duration-700 "></div>
                  <div
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-3 
                          group-hover:xl:-translate-y-2 transition-all duration-300 w-full">
                    <div className="flex justify-between gap-x -5   px-4">
                      <div className="text-white-400  ">{data.title}</div>
                      <div className="flex justify-between gap-5">

                        {data.demo_link && (
                          <div className="delay-100">
                            <a
                              href={data.demo_link}
                              target="_blank"
                              rel="noreferrer">
                              <BsGlobe2 className="text-xl" />
                            </a>
                          </div>
                        )}

                        {data.project_link && (
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <a
                              href={data.project_link}
                              target="_blank"
                              rel="noreferrer">
                              <BsCodeSlash className="text-xl" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default WorkSlider;
