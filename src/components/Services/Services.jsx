import "./Services.css";
import { servicesData } from "../../data/servicesData";

const Services = () => {
  return (
    <section id="services">
      <div className="service-container">
        <div className="service-title">
          <h2>What Service i Offer you</h2>
          <h3>Services</h3>
        </div>

        <div className="service-row">
          {servicesData &&
            servicesData.map((service) => (
              <div
                className=" my-service shadow"
                key={service.id}
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <div className="ser-back">
                  <i className={`${service.shadow_icon} text-white`}></i>
                </div>
                <h4 className="web">{service.service_name}</h4>
                <p className="service-info mt-2">
                  "{service.service_description}"
                </p>
                {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                <div className="shadow-icon">
                  <i className={service.shadow_icon}></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
