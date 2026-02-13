import { Fragment } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "./pages/Hero/index";
import Services from "./pages/Services/index";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NavProvider from "./context/NavContext";
import ContactUs from "./pages/ContactUs";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer";
import { pageview } from "./components/analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return (
    <Fragment>
      <AnimatedCursor
        innerSize={7}
        outerSize={25}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        trailingSpeed={7}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "2px solid white",
        }}
      />
      <div className="page">
        <Outlet />
        <NavProvider>
          <Header />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <ContactUs />
          <Footer />
        </NavProvider>
      </div>
    </Fragment>
  );
}

export default App;
