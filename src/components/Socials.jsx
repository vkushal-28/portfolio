import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
const Socials = () => {
  const socialsData = [
    {
      icon: <RiLinkedinLine />,
      link: "https://www.linkedin.com/in/kushal-vala-713862207/",
    },
    {
      icon: <RiGithubLine />,
      link: "https://github.com/vkushal-28/",
    },
    // {
    //   icon: <RiFacebookLine />,
    //   link: "https://www.linkedin.com/in/kushal-vala-713862207/",
    // },
  ];
  return (
    <div className="flex items-center gap-x-2  text-lg ">
      {socialsData.map((social, ind) => (
        <a
          href={social.link}
          key={ind}
          className="hover:text-pink-500 text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-2 rounded-full"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
export default Socials;
