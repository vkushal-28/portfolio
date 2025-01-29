/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { servicesData } from "../../data/serviceData";
import CommonHeader from "../../components/CommonHeader";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import { Toaster } from "react-hot-toast";

const Services = () => {
  // hooks
  const serviceRef = useNav("Services");

  const ServiceCard = ({ name, icon, description }) => {
    return (
      <div className="w-full max-w-sm md:max-w-[md] lg:max-w-[350px] h-[285px]  md:h-[285px] lg:h-[325px]  xl:h-[286px] max-h-[550px] p-[3px] rounded-tl-[10%] rounded-r-[2%] rounded-l-[2%]  rounded-br-[10%]  rounded bg-gradient-to-br from-indigo-400 from-[10%] via-bl via-[50%]  to-pink-500 to-[95%]">
        <div className="w-full max-w-sm p-7 h-[278px] md:h-[280px] lg:h-[318px] xl:h-[280px]  bg-white   shadow dark:bg-bl rounded-tl-[16%] rounded-br-[16%] rounded-bl-[3%]">
          <div className="flex flex-col items-center ">
            <div className="  w-20 bg-slate-700  h-20 rounded-full shadow-md mb-4 inset-48 shadow-pink-500 flex items-center justify-center p-3">
              <img src={icon} alt="" />
            </div>
            <h5 className="mb-3  text-xl font-medium text-white">{name}</h5>
            <div className="text-sm text-gray-400 text-center">
              {description}
            </div>
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
      className=" min-h-[100vh]  bg-bl"
      style={{ height: "fit-content" }}
      ref={serviceRef}
      id="servicesSection">
      <Toaster />
      <div className="  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
        <div className="min-h-[100vh]  bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] ">
          <div className="min-h-[100vh]   bg-blLight py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] flex items-center">
            <div className="container mx-auto  ">
              <CommonHeader
                title1={"My"}
                title2={"Services."}
                description={
                  "Welcome to my comprehensive suite of services, where creativity meets functionality. I'm specialize in crafting seamless user experiences through cutting-edge UI/UX design, web Development in latest technologies and Restful APIs. "
                } 
              />

              <Reveal direction="up" delay={0.3} className="w-full h-full ">
                <div className=" h-full flex flex-col lg:flex-row items-center justify-around xl:flex-row gap-6">
                  {/* =========== Service Details Card =========== */}
                  {servicesData.map((service, ind) => (
                    <ServiceCard
                      key={ind}
                      name={service.service_name}
                      icon={service.icon}
                      description={service.service_description}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
export default Services;
