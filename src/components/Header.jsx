import { useContext } from "react";
import Socials from "./Socials";
import * as Imgs from "../assets/images/index";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { NavContext } from "../context/NavContext";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
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
        className={`fixed z-50 w-full flex flex-row items-start md:items-center px-4 md:px-16 xl:px-0 xl:h-[85px] bg-bl bg-opacity-90 md:bg-opacity-70 lg:bg-opacity-50 rounded-md bg-clip-padding backdrop-blur-md shadow-md`}>
        <div className="container mx-auto transition-all delay-150">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.1, delay: 0.25 }}
            className="flex flex-row justify-between items-start md:items-center gap-y-6 py-4 md:py-5">
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
                  className="lg:hidden p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors "
                  onClick={() => setIsMobileMenuOpen(true)}>
                  <RiMenuLine className="text-2xl" />
                </motion.button>
              </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <MobileNav />
    </>
  );
};

export default Header;
