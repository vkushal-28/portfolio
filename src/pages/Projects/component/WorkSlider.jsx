import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { FaCode, FaGlobe } from "react-icons/fa";
import { allProjectsData } from "../../../data/projectsData";

const WorkSlider = () => {
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

                    <div className="flex gap-1 mt-3">
                      {data.language_used.length > 0 &&
                        data.language_used.map((lang, i) => (
                          <img src={lang} alt="" width={20} height={20} />
                        ))}
                    </div>

                    {data.demo_link && (
                      <a
                        href={data.demo_link}
                        target="_blank"
                        rel="noreferrer"
                        className=" relative inline-flex items-center justify-center mt-4 p-[1.5px] mb-1 me-1 overflow-hidden text-sm  text-gray-900 rounded-lg group  bg-gradient-to-l hover:bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500  hover:text-white dark:text-white  ">
                        <span className="relative px-3 py-0.5 transition-all ease-in duration-175 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                          <FaGlobe /> Preview
                        </span>
                      </a>
                    )}
                    {data.project_link && (
                      <a
                        href={data.project_link}
                        target="_blank"
                        rel="noreferrer"
                        className=" relative ml-1 inline-flex items-center justify-center mt-4 p-[1.5px] mb-1 me-1 overflow-hidden text-sm rounded-lg group bg-indigo-500 hover:bg-indigo-600 hover:text-white dark:text-white">
                        <span className="relative px-3 py-0.5 transition-all ease-in duration-175 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                          <FaCode /> Code
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default WorkSlider;
