import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="pt-1">
      <div className="contact-me2 ">
        <div className="reachme-title2 ">
          <h2>I Want To Hear From You</h2>

          <h3>Contact Me</h3>
        </div>
        <div class="row align-items-center mb-5">
          <div class="col-md-6 mb-4">
            <div className="contact-card ">
              <div className="d-flex">
                <div className="c-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="pl-4">
                  <h4 className="web mt-2">Address</h4>
                  <h4 className="web text-white">Toronto, Ontario, Canada</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div className="contact-card ">
              <div className="d-flex">
                <div className="c-icon">
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
                <div className="pl-4">
                  <h4 className="web mt-2">Social Profiles</h4>
                  <h4 className="web text-white">
                    <a
                      href="https://www.linkedin.com/in/kushal-vala-713862207"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin mr-3" />
                    </a>
                    <a href="mailto:vkushal28.ca@gmail.com">
                      <i className="fa fa-envelope mr-3" />
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-instagram mr-3" />
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div className="contact-card ">
              <div className="d-flex">
                <div className="c-icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="pl-4">
                  <h4 className="web mt-2">Email Me</h4>
                  <h4 className="web text-white">
                    <a href="mailto:vkushal28.ca@gmail.com">
                      vkushal28.ca@gmail.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div className="contact-card ">
              <div className="d-flex">
                <div className="c-icon">
                  <i class="fa-solid fa-phone-volume"></i>
                </div>
                <div className="pl-4">
                  <h4 className="web mt-2">Call me</h4>
                  <h4 className="web text-white">+1 (647)865-9267</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
