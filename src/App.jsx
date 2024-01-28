import { Fragment } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import { Outlet } from "react-router-dom";
import Hero from "./pages/Hero/index";
import Services from "./pages/Services/index";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <Fragment>
      <div className="page">
        <Outlet />
        <NavProvider>
          <Header />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
        </NavProvider>
      </div>
    </Fragment>
  );
}

export default App;
