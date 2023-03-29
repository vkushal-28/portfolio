import "./AboutMe.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import resume from "../../data/resume/Kushal_Vala_Resume.pdf";
import profileImage from "../../images/logo/my-profile.png";
const AboutMe = () => {
  const about = [
    {
      id: 1,
      title: "About Me",
      title_2: "WHY hire me for your next project",
      description_one:
        "<p  style=text-align:justify>As a Frontend Developer, I am specialize in developing high-performance, reusable, and scalable web applications using the React.js library. I have a solid understanding of JavaScript, HTML, and CSS, and I'm adept at working with Redux, Node.js, and other popular front-end and back-end technologies.</p><p  style=text-align:justify>With a passion for building user-friendly interfaces, I am skilled in developing responsive designs that work seamlessly across different devices and browsers. I am comfortable working with Agile methodologies, and I have experience collaborating with cross-functional teams to deliver projects within tight deadlines.</p><p style=text-align:justify>I have a strong understanding of software development principles and best practices, and I continuously seek to stay up-to-date with the latest developments in the React ecosystem. With excellent communication skills and a proactive attitude, I am committed to delivering quality code that meets project requirements and exceeds user expectations.</p>",
      about_avatar: profileImage,
      // "https://vrscout.com/wp-content/uploads/2021/02/RealPlayerMeFeature.png",
    },
  ];
  return (
    <>
      {about &&
        about.map((details) => (
          <main id="about" key={details.id}>
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  className=" col-md-4 col-sm-12 about-img"
                  data-aos="fade-up-right"
                >
                  {/* <img src={`${img_300}${details.about_avatar}`} alt="" /> */}
                  <img src={`${details.about_avatar}`} alt="" />
                </div>
                <div
                  className=" col-md-8  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    <h2>{details.title}</h2>
                    <h3>{details.title_2}</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" class="unselectable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${details.description_one}`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="itscv">
                    <a
                      href={resume}
                      download="RESUME.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv">
                        Download Cv <i class="bx bx-download"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ))}
    </>
  );
};

export default AboutMe;
