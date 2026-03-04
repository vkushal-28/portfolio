import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const MobileNav = () => {
  const {
    activeLinkId,
    setActiveLinkId,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useContext(NavContext);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  const socialsData = [
    {
      icon: <RiLinkedinLine className="text-2xl" />,
      link: "https://www.linkedin.com/in/kushal-vala/",
    },
    {
      icon: <RiGithubLine className="text-2xl" />,
      link: "https://github.com/vkushal-28/",
    },
  ];

  const handleClickNav = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    setActiveLinkId(content);
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-bl via-blLight to-purple-900 z-50 shadow-2xl flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                <RiCloseLine className="text-2xl" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {navLinks.map((nav, index) => (
                <motion.button
                  key={nav}
                  variants={itemVariants}
                  onClick={() => handleClickNav(nav)}
                  className={`py-4 text-lg text-left border-b border-white/10 transition-colors ${
                    activeLinkId === nav
                      ? "text-pink-500"
                      : "text-white hover:text-pink-400"
                  }`}>
                  {nav}
                </motion.button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="p-6 border-t border-white/10">
              <p className="text-white/60 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialsData.map((social, ind) => (
                  <motion.a
                    key={ind}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-pink-500 transition-colors">
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
