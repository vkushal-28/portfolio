import { Fragment } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import { Outlet } from "react-router-dom";
import Hero from "./pages/Hero/index";
import Services from "./pages/Services/index";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";

function App() {
  return (
    <Fragment>
      <Outlet />
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
    </Fragment>
  );
}

export default App;
