import { useContext } from "react";
import Socials from "./Socials";
import * as Imgs from "../assets/images/index";
import NavItems from "./NavItems";
import Reveal from "./Reveal";
import MobileNav from "./MobileNav";
import { NavContext } from "../context/NavContext";
import { motion } from "framer-motion";
import { RiMenuLine } from "react-icons/ri";

const Header = () => {
  const { setIsMobileMenuOpen } = useContext(NavContext);

  const handleClickLogo = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`absolute z-30 w-full flex flex-row items-start md:items-center px-4 md:px-16 xl:px-0 xl:h-[85px] bg-bl rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 shadow-md`}>
        <div className="container mx-auto transition-all delay-150">
          <Reveal direction="down">
            <div className="flex flex-row justify-between items-start md:items-center gap-y-6 py-6 ">
              {/* logo */}
              <div
                className="h5 flex items-start md:items-center text-2xl text-white cursor-pointer font-normal "
                onClick={handleClickLogo}>
                <img
                  src={Imgs.devImg}
                  className="inline"
                  width={30}
                  height={30}
                  alt="Logo"
                />
                Kushal.dev <span className="blink_me"> _</span>
              </div>

              {/* Desktop Navbar menu items */}
              <NavItems />

              <div className="flex gap-5">
                {/* Desktop Socials */}
                <Socials />

                {/* Mobile Hamburger Icon */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="lg:hidden p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors z-40"
                  onClick={() => setIsMobileMenuOpen(true)}>
                  <RiMenuLine className="text-2xl" />
                </motion.button>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <MobileNav />
    </>
  );
};

export default Header;
