import { createContext, useState } from "react";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [UIState, setUIState] = useState({
    cartSidebar: false,
    dropdown: false,
  });

  const toggleCartSidebar = () => {
    setUIState((prevState) => ({
      ...prevState,
      cartSidebar: !prevState.cartSidebar,
    }));
  };

  const toggleDropdown = () => {
    setUIState((prevState) => ({
      ...prevState,
      dropdown: !prevState.dropdown,
    }));
  };

  return (
    <UIContext.Provider
      value={{
        UIState,
        setUIState,
        toggleCartSidebar,
        toggleDropdown,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
