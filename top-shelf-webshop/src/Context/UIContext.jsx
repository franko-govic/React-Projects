import { createContext, useState } from "react";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [UIState, setUIState] = useState({
    cartSidebar: false,
    dropdown: false,
    mobileFilter: false,
    filterCategory: false,
    filterBrand: false,
  });

  const toggleUIState = (property) => {
    setUIState((prevState) => ({
      ...prevState,
      [property]: !prevState[property],
    }));
  };

  return (
    <UIContext.Provider
      value={{
        UIState,
        setUIState,
        toggleUIState,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
