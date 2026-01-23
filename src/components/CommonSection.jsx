import React from "react";
import CommonHeader from "./CommonHeader";

const CommonSection = ({ children, title1, title2, description, id, dark }) => {
  return (
    <div
      className="h-full bg-blLight "
      style={{ height: "fit-content" }}
      //   ref={skillsRef}
      id={id}>
      <div className="h-full  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
        <div className="h-full bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%]">
          <div
            className={`h-full ${
              dark ? "bg-bl" : "bg-blLight"
            }  py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%]`}>
            <div className=" mx-auto container  text-center transition-all delay-150">
              <CommonHeader
                title1={title1}
                title2={title2}
                description={description}
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
