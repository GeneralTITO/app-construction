import { createContext } from "react";
import { useState } from "react";

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }: any) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <SidebarContext.Provider value={{ handleButtonClick, selectedButton }}>
      {children}
    </SidebarContext.Provider>
  );
};
