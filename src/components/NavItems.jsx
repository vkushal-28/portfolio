import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const NavItems = () => {
  const { activeLinkId } = useContext(NavContext);

  const navLinks = ["Home", "About", "Services", "Skills", "Projects"];

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <ul key={content}>
        <li className="px-3">
          <button
            onClick={handleClickNav}
            className={`sora capitalize text-base ${
              activeLinkId === content
                ? " text-pink-500 after:w-[100%] after:bg-pink-500 after:transition-all after:duration-300 "
                : ""
            } hover:text-pink-500  transition-all duration-400  cursor-pointer capitalize xl:text-md relative after:w-8 after:h-[2px]  after:absolute after:-bottom-0 after:left-0 `}>
            {content}
          </button>
        </li>
      </ul>
    );
  };

  return (
    <div className=" hidden lg:flex items-center gap-x-2 text-lg ">
      {navLinks.map((nav) => renderNavLink(nav))}
      {/* {items.map((item, ind) => (
        <a
          href={item.href}
          key={ind}
          className={`sora capitalize text-md ${
            section === item.href ? "text-pink-500" : "white"
          } hover:text-pink-500 hover:backdrop-blur-sm  transition-all duration-400 p-2 rounded-full`}
          onClick={() => setSection(item.href)}
        >
          {item.name}
        </a>
      ))} */}
    </div>
  );
};

export default NavItems;
