const NavItems = () => {
  const items = ["home", "about", "services", "skills", "my work", "contact"];
  return (
    <div className="flex items-center gap-x-2 text-lg">
      {items.map((item, ind) => (
        <a
          href="/"
          key={ind}
          className="sora capitalize text-md hover:text-pink-500 hover:backdrop-blur-sm  transition-all duration-400 p-2 rounded-full"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavItems;
