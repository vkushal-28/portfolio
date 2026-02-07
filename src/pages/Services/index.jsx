import PropTypes from "prop-types";
import { servicesData } from "../../data/serviceData";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import TiltCard from "react-parallax-tilt";
import Section from "../../components/Section";

const Services = () => {
  const serviceRef = useNav("Services");

  return (
    <Section
      sectionRef={serviceRef}
      id="servicesSection"
      title1={"My"}
      title2={"Services."}
      description={
        "Welcome to my comprehensive suite of services, where creativity meets functionality. I'm specialize in crafting seamless user experiences through cutting-edge UI/UX design, web Development in latest technologies and Restful APIs. "
      }>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => {
          const Icon = service.shadow_icon;
          return (
            <Reveal
              direction="up"
              delay={0.15 * index}
              className="w-full h-full "
              key={service.id}>
              <TiltCard>
                <div
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
                  <Icon className="w-12 h-12  text-indigo-400" />
                  <h3 className="relative z-10 text-xl font-semibold text-white my-5">
                    {service.title}
                  </h3>
                  <p className="relative z-10 ">{service.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

Services.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
export default Services;
