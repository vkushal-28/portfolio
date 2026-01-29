import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
const Socials = () => {
  const socialsData = [
    {
      icon: <RiLinkedinLine />,
      link: "https://www.linkedin.com/in/kushal-vala/",
    },
    {
      icon: <RiGithubLine />,
      link: "https://github.com/vkushal-28/",
    },
  ];
  return (
    <div className="flex items-center gap-x-2  text-lg ">
      {socialsData.map((social, ind) => (
        <a
          href={social.link}
          key={ind}
          target="_blank"
          className="hover:text-pink-500 text-xl hover:bg-white/10 hover:backdrop-blur-sm  duration-400 p-2 rounded-full transition-all delay-150">
          {social.icon}
        </a>
      ))}
    </div>
  );
};
export default Socials;
