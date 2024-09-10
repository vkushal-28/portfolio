import { Swiper, SwiperSlide } from "swiper/react";

// import swiper projects
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// icons
import { BsCodeSlash, BsGlobe2 } from "react-icons/bs";
import { allProjectsData } from "../../../data/projectsData";
import { useState } from "react";

const WorkSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const data = [
    {
      id: 1,
      title: "Project 1",
      description: "This is the description for project 1",
      image: "https://via.placeholder.com/300",
      viewLink: "https://example.com/view1",
      codeLink: "https://github.com/example/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the description for project 2",
      image: "https://via.placeholder.com/300",
      viewLink: "https://example.com/view2",
      codeLink: "https://github.com/example/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the description for project 3",
      image: "https://via.placeholder.com/300",
      viewLink: "https://example.com/view3",
      codeLink: "https://github.com/example/project3",
    },
    // More data can go here
  ];

  return (
    // <Swiper
    //   spaceBetween={10}
    //   pagination={{ clickable: true }}
    //   modules={[Pagination]}
    //   className="h-full pb-8 w-full">
    //   {allProjectsData.projects.map((project, ind) => {
    //     return (
    //       <SwiperSlide key={ind}>
    //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-6 lg:gap-8 cursor-pointer p-6 md:p-4 xl:p-3">
    //           {project.projectGroup.map((data, index) => {
    //             // console.log("data", data);
    //             return (
    //               <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //                 <a href="#">
    //                   <img className="rounded-t-lg" src={data.path} alt="" />
    //                 </a>
    //                 <div className="p-5">
    //                   <a href="#">
    //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //                       Noteworthy technology acquisitions 2021
    //                     </h5>
    //                   </a>
    //                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //                     Here are the biggest enterprise technology acquisitions
    //                     of 2021 so far, in reverse chronological order.
    //                   </p>
    //                   <a
    //                     href="#"
    //                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //                     Read more
    //                     <svg
    //                       className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //                       aria-hidden="true"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       fill="none"
    //                       viewBox="0 0 14 10">
    //                       <path
    //                         stroke="currentColor"
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         strokeWidth={2}
    //                         d="M1 5h12m0 0L9 1m4 4L9 9"
    //                       />
    //                     </svg>
    //                   </a>
    //                 </div>
    //               </div>

    //               // ======== actual ==========
    //               // <div
    //               //   key={index}
    //               //   className="relative rounded-lg overflow-hidden flex items-center justify-center group  "
    //               //   style={{
    //               //     boxShadow: `-3px -3px 4px #ec4899, 4px 4px 10px rgba(0, 0, 0, 0.5)`,
    //               //   }}
    //               //   // hover:border-2 hover:border-pink-800
    //               // >
    //               //   <div className="flex items-center justify-center relative overflow-hidden group h-full">
    //               //     {/* image */}
    //               //     <img
    //               //       src={data.path}
    //               //       className="object-cover h-full"
    //               //       // width={500}
    //               //       // height={400}
    //               //       alt=""
    //               //     />
    //               //     {/* overlay gradient */}
    //               //     <div
    //               //       className="absolute inset-0 bg-gradient-to-b from-slate-950/50 from-[10%] to-[80%]
    //               //         to-slate-950/95 opacity-0
    //               //         group-hover:opacity-90 transition-all duration-700 "></div>
    //               //     <div
    //               //       className="absolute bottom-0 translate-y-full group-hover:-translate-y-3
    //               //         group-hover:xl:-translate-y-2 transition-all duration-300 w-full">
    //               //       <div className="flex justify-between gap-x -5   px-4">
    //               //         <div className="text-white-400  ">{data.title}</div>
    //               //         <div className="flex justify-between gap-5">
    //               //           {/* title part 1 */}
    //               //           {data.demo_link && (
    //               //             <div className="delay-100">
    //               //               <a
    //               //                 href={data.demo_link}
    //               //                 target="_blank"
    //               //                 rel="noreferrer">
    //               //                 <BsGlobe2 className="text-xl" />
    //               //               </a>
    //               //             </div>
    //               //           )}
    //               //           {/* title part  2 */}
    //               //           {data.project_link && (
    //               //             <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
    //               //               <a
    //               //                 href={data.project_link}
    //               //                 target="_blank"
    //               //                 rel="noreferrer">
    //               //                 <BsCodeSlash className="text-xl" />
    //               //               </a>
    //               //             </div>
    //               //           )}
    //               //         </div>
    //               //       </div>
    //               //     </div>
    //               //   </div>
    //               // </div>
    //             );
    //           })}
    //         </div>
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
    <div className="flex flex-col items-center justify-center">
      {/* Slider Container */}
      <div className="relative w-full max-w-xl p-4">
        {/* Slider */}
        <div className="flex items-center justify-center">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`transition-transform duration-500 ease-in-out transform ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
              style={{ display: index === currentIndex ? "block" : "none" }}>
              <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  src={item.image}
                  alt={item.title}
                />
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex gap-4">
                  <a
                    href={item.viewLink}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    View
                  </a>
                  <a
                    href={item.codeLink}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400">
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400">
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkSlider;
