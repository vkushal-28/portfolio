import Socials from "./Socials";
import * as Imgs from "../assets/images/index";
import NavItems from "./NavItems";
import Reveal from "./Reveal";
const Header = () => {
  const handleClickLogo = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header
      className={`absolute z-30 w-full flex flex-row items-start md:items-center px-4 md:px-16 xl:px-0 xl:h-[85px] bg-bl rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 shadow-md  `}>
      <div className="container mx-auto">
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
                alt=""
              />
              Kushal.dev <span className="blink_me"> _</span>
            </div>
            {/* Navbar menu items */}
            <NavItems />
            {/* Socials */}
            <Socials />
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Header;
