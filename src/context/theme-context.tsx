import { createContext, useState } from "react";

interface themeContextProviderProps {
  children: React.ReactNode;
}

export type themeContextType = {
  themeColor: string;
  setThemeColor: (theme: string) => void;
};

const themeContext = createContext<themeContextType | null>(null);

export const ThemeContextProvider = ({
  children,
}: themeContextProviderProps) => {
  const [currTheme, setCurrTheme] = useState<string>("light");

  return (
    <themeContext.Provider
      value={{
        themeColor: currTheme,
        setThemeColor: setCurrTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default themeContext;
