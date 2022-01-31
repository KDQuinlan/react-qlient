import React from "react";
import tw from "tailwind-styled-components";
import { useTheme } from "next-themes";
import { BsFillCloudSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const ToggleTheme = tw.button`
    py-2 
    px-3 
    bg-yellow-400 
    hover:bg-yellow-300 
    rounded 
    transition duration-300 
    dark:bg-violet-400
`;

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ToggleTheme
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <BsFillCloudSunFill size={24} color="#f7b90c" />
      ) : (
        <BsFillMoonStarsFill size={24} color="#f7b90c" />
      )}
    </ToggleTheme>
  );
};

export default ThemeButton;
