/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { servicesData, servicesData2 } from "../../data/serviceData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import { Toaster } from "react-hot-toast";
import TiltCard from "react-parallax-tilt";
import blur from "./bgblur.svg";
const Services = () => {
  // hooks
  const serviceRef = useNav("Services");

  const ServiceCard = ({ name, icon, description }) => {
    return (
      <div className="w-full max-w-sm md:max-w-[md] lg:max-w-[350px] h-[285px]  md:h-[285px] lg:h-[325px]  xl:h-[286px] max-h-[550px] p-[3px] rounded-tl-[10%] rounded-r-[2%] rounded-l-[2%]  rounded-br-[10%]  rounded bg-gradient-to-br from-indigo-400 from-[10%] via-bl via-[50%]  to-pink-500 to-[95%] ">
        <div className="w-full max-w-sm p-7 h-[278px] md:h-[280px] lg:h-[318px] xl:h-[280px]  bg-white   shadow dark:bg-bl rounded-tl-[16%] rounded-br-[16%] rounded-bl-[3%]">
          <div className="flex flex-col items-center h-fit">
            <div className="  w-20 bg-slate-700  h-20 rounded-full shadow-md mb-4 inset-48 shadow-pink-500 flex items-center justify-center p-3">
              <img src={icon} alt="" />
            </div>
            <h5 className="mb-3  text-xl font-medium text-white">{name}</h5>
            <div className="text-center">{description}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // <section
    //   ref={serviceRef}
    //   id="servicesSection"
    //   className="h-full min-h-[100vh] bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
    //   <div className="h-full min-h-[100vh] bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] ">
    //     <div className="h-full min-h-[100vh] bg-blLight py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] ">
    //       <div className="container mx-auto">
    <section
      className=" min-h-[100vh] bg-bl"
      style={{ height: "fit-content" }}
      ref={serviceRef}
      id="servicesSection">
      <Toaster />
      {/* <div className="  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]"> */}
      {/* <div className="min-h-[100vh]  bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] "> */}
      <div className="min-h-[100vh]  bg-blLight py-20 md:py-32 text-center rounded-tl-none md:rounded-tl-[10%] rounded-br-none md:rounded-br-[10%] flex items-center">
        <div className="container mx-auto transition-all delay-150 ">
          <CommonHeader
            title1={"My"}
            title2={"Services."}
            description={
              "Welcome to my comprehensive suite of services, where creativity meets functionality. I'm specialize in crafting seamless user experiences through cutting-edge UI/UX design, web Development in latest technologies and Restful APIs. "
            }
          />

          {/* <Reveal direction="up" delay={0.3} className="w-full h-full "> */}
          {/* <div className=" h-full flex flex-col lg:flex-row items-center justify-around xl:flex-row gap-6"> */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* =========== Service Details Card =========== */}
            {/* {servicesData.map((service, ind) => (
                <ServiceCard
                  key={ind}
                  name={service.service_name}
                  icon={service.icon}
                  description={service.service_description}
                />
              ))} */}
            {servicesData2.map((service, index) => {
              const Icon = service.shadow_icon;
              return (
                <Reveal
                  direction="up"
                  delay={0.15 * index}
                  className="w-full h-full ">
                  <TiltCard>
                    <div
                      key={service.id}
                      className="relative bg-bl rounded-xl p-6 shadow-md hover:shadow-xl border border-indigo-400/20  overflow-hidden text-left"
                      style={{
                        boxShadow: `-2px -2px 4px #818cf8c7, 3px 3px 7px rgba(0, 0, 0, 0.5)`,
                      }}>
                      <div
                        className="absolute -top-10 -right-10 w-24 h-24 
               rounded-full bg-indigo-500 
               blur-3xl pointer-events-none z-0"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none z-0"></div>

                      {/* Icon */}

                      <Icon className="w-12 h-12  text-indigo-400" />

                      {/* Title */}
                      <h3 className="relative z-10 text-xl font-semibold text-white my-5">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="relative z-10 ">{service.description}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
          {/* </Reveal> */}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

Services.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
export default Services;
