import { createContext, useState } from "react";

export const NavContext = createContext();

// eslint-disable-next-line react/prop-types
const NavProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");

  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
