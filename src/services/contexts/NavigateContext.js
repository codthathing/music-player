import { createContext, useState } from "react";

export const NavigateContext = createContext();

const NavigateProvider = ({ children }) => {
  const [showMusicDetails, setShowMusicDetails] = useState(false);
  return <NavigateContext.Provider value={{showMusicDetails, setShowMusicDetails}}>{children}</NavigateContext.Provider>;
};

export default NavigateProvider;
