import { Fragment } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import { Outlet } from "react-router-dom";
import Hero from "./pages/Hero/index";

function App() {
  return (
    <Fragment>
      <Outlet />
      <Header />
      <Hero />
      <About />
    </Fragment>
  );
}

export default App;
