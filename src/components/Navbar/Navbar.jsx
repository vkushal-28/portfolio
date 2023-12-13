import "./Navbar.css";
import { Link } from "react-router-dom";
import Main from "./nav";

const Navbar = () => {
  return (
    <>
      <Main />
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center justify-content-between  lefty">
              <h5 className="ld-flex mr-auto devman">
                <img
                  src="https://code.google.com/images/developers.png"
                  alt=""
                />
                Kushal.dev <span className="blink"> _</span>
              </h5>
              <nav className="nav-menu flex-start mainMenu">
                <ul>
                  <li
                    // className="active"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <a href="#home"> Home</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="600">
                    <a href="#about">About</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <a href="#services">Services</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <a href="#skills">Skills</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="#work">My Work</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* <div className="left-btns "> */}
              {/* <div className=" " id="theme-button2">
                  <input id="toggle" className="toggle" type="checkbox"></input>
                </div> */}
              <div className="d-flex align-items-center justify-content-end">
                <div className="nav-social">
                  <a
                    href="https://github.com/vkushal-28"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
                <div className="CvMe">
                  <a
                    href="mailto:vkushal28.ca@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="my-cv">Contact Me</button>
                  </a>
                </div>
                {/* </div> */}

                {/* <div className=" " id="theme-button">
                  <Link to="#" className="menuBtn">
                    <span className="lines"></span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
