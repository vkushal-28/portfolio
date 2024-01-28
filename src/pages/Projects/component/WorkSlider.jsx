import { Swiper, SwiperSlide } from "swiper/react";

// import swiper projects
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// icons
import { BsCodeSlash, BsGlobe2 } from "react-icons/bs";
import { allProjectsData } from "../../../data/projectsData";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-full pb-8 w-full"
    >
      {allProjectsData.projects.map((project, ind) => {
        return (
          <SwiperSlide key={ind}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-6 lg:gap-8 cursor-pointer p-6 md:p-4 xl:p-3">
              {project.projectGroup.map((data, index) => {
                // console.log("data", data);
                return (
                  <di
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                    style={{
                      boxShadow: `-3px -3px 4px #ec4899, 4px 4px 10px rgba(0, 0, 0, 0.5)`,
                    }}
                    // hover:border-2 hover:border-pink-800
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <img
                        src={data.path}
                        className="object-cover "
                        // width={500}
                        // height={400}
                        alt=""
                      />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-b from-slate-950/50 from-[10%] to-[80%]
                          to-slate-950/95 opacity-0 
                          group-hover:opacity-90 transition-all duration-700 "
                      ></div>
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-3 
                          group-hover:xl:-translate-y-2 transition-all duration-300 w-full"
                      >
                        <div className="flex justify-between gap-x -5   px-4">
                          <div className="text-white-400  ">{data.title}</div>
                          <div className="flex justify-between gap-5">
                            {/* title part 1 */}
                            {data.demo_link && (
                              <div className="delay-100">
                                <a
                                  href={data.demo_link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <BsGlobe2 className="text-xl" />
                                </a>
                              </div>
                            )}
                            {/* title part  2 */}
                            {data.project_link && (
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                <a
                                  href={data.project_link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <BsCodeSlash className="text-xl" />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </di>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
