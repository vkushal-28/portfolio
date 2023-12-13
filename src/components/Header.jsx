import Socials from "./Socials";
import * as Imgs from "../assets/images/index";
import NavItems from "./NavItems";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 ">
          {/* logo */}
          <div className="h5 flex items-center text-2xl text-white">
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
