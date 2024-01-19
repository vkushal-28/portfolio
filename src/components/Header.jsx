import Socials from "./Socials";
import * as Imgs from "../assets/images/index";
import NavItems from "./NavItems";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex flex-row items-start md:items-center px-4 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-start md:items-center gap-y-6 py-6 ">
          {/* logo */}
          <div className="h5 flex items-start md:items-center text-2xl text-white">
            <img
              src={Imgs.devImg}
              className="inline"
              width={30}
              height={30}
              alt=""
            />{" "}
            Kushal.dev <span className="blink"> _</span>
          </div>
          {/* Navbar menu items */}
          <NavItems />
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
