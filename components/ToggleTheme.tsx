import React from "react";
import tw from "tailwind-styled-components";
import { useTheme } from "next-themes";

const ToggleTheme = tw.button`
    py-2 
    px-3 
    bg-yellow-400 
    hover:bg-yellow-300 
    rounded 
    transition duration-300 
    dark:bg-gray-800
`;

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ToggleTheme
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? "☀️" : "🌙"}
    </ToggleTheme>
  );
};

export default ThemeButton;
