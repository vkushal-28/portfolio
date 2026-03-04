import { createContext, useState } from "react";

export const NavContext = createContext();

// eslint-disable-next-line react/prop-types
const NavProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const providerValue = {
    activeLinkId,
    setActiveLinkId,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
