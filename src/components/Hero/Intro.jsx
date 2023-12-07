import { useEffect } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import { images } from "../../images/allImages";

const Intro = () => {
  const contact = [
    {
      id: 1,
      icon: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/kushal-vala-713862207",
    },
    {
      id: 2,
      icon: "fa-regular fa-envelope",
      link: "mailto:vkushal28.ca@gmail.com",
    },
    // {
    //   id: 3,
    //   icon: "fa fa-instagram",
    //   link: "",
    // },
  ];
  useEffect(() => {
    document.title = "Kushal Portfolio";
  }, []);

  const details = [
    {
      id: 1,
      greeting: "Greetings",
      name: "Kushal Vala",
      job_title: "Web Developer",
      par_inro: "I am a web developer",
      avatar_img: null,
      hireMe_link: "vkushal28.ca@gmail.com",
      cv_link: "",
    },
  ];

  return (
    <>
      {details &&
        details.map((detail) => (
          <section className=" intro-page" id="home" key={detail.id}>
            <div className="container-xl">
              <div className="decorations">
                <div className="decor-dot2">
                  <img src={decor3} alt="" />
                </div>

                <div className="parcol"></div>
              </div>
              <div className="small-intro">
                <div className="intro-row">
                  <div className="col-lg-6  col-md-6 col-sm-12 intro-left d-flex align-items-center">
                    <div>
                      <div className="intro-name">
                        {/* <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      {detail.job_title}
                    </h3> */}
                        <h2
                          className="name text-white"
                          data-aos="fade-down"
                          data-aos-duration="1600"
                        >
                          Hey! I Am
                        </h2>
                        <h2
                          className="job  text-animate mb-1"
                          data-aos="fade-down"
                          data-aos-duration="1700"
                        >
                          {detail.name}
                        </h2>
                        <p
                          className="myinfo"
                          data-aos="fade-down"
                          data-aos-duration="1800"
                        >
                          <Typewriter
                            onInit={(typewriter) => {
                              typewriter
                                .pauseFor(500)
                                .typeString(
                                  "<strong><span style=color:#28B463; font-size=14px>Web Developer</span></strong>"
                                )
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(
                                  "<strong><span style=color:#F39C12 font-size:14px>Frontend Developer</span></strong>"
                                )
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(
                                  "<strong><span style=color:#17c0e9>React JS Developer</span></strong>"
                                )
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(
                                  "<strong><span style=color:#F39C12>Next JS Developer</span></strong>"
                                )
                                .pauseFor(500)
                                .deleteAll()
                                .start();
                            }}
                            options={{
                              autoStart: true,
                              loop: true,
                            }}
                          />
                        </p>
                      </div>
                      <p className="mb-3">
                        Driving success through code and creativity, I craft web
                        solutions that go beyond expectations. From sleek
                        designs to seamless functionality, I'm committed to
                        delivering results that make an impact. Let's turn your
                        digital goals into a reality with effective and
                        efficient web development.
                      </p>
                      <div
                        className="intro-btns"
                        data-aos="fade-up"
                        data-aos-duration="1900"
                      >
                        <a
                          href={`mailto:${detail.hireMe_link}`}
                          className="contactMe"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="contact-me">
                            Hire me <i className="bx bx-send "></i>
                          </button>
                        </a>
                      </div>
                      <div
                        className="intro-contact"
                        data-aos="fade-up"
                        data-aos-duration="1800"
                      >
                        <span>Follow Me:</span>
                        <ul>
                          <li>
                            {contact &&
                              contact.map((data1) => (
                                <a
                                  href={data1.link}
                                  className="icon-link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  key={data1.id}
                                >
                                  <i className={data1.icon}></i>
                                </a>
                              ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 col-sm-12 "
                    data-aos="fade-down-left"
                  >
                    <div className="ff">
                      <img className="intro-img " src={images.heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;
