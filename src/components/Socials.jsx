import { RiLinkedinLine, RiFacebookLine, RiGithubLine } from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-2  text-lg ">
      <a
        href="/"
        className="hover:text-pink-500 text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-2 md:px-3 rounded-full"
      >
        <RiLinkedinLine />
      </a>
      <a
        href="/"
        className="hover:text-pink-500 text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-2 md:px-3 rounded-full"
      >
        <RiFacebookLine />
      </a>

      <a
        href="/"
        className="hover:text-pink-500 text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-2 md:px-3 rounded-full"
      >
        <RiGithubLine />
      </a>
    </div>
  );
};
export default Socials;
