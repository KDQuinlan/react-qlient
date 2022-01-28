import React from "react";
import { NavTitle, NavButton } from "./NavButton";
import ThemeButton from "./ToggleTheme";
import BurgerButton from "./BurgerButton";

const NavBar = () => {
  return (
    <nav className="bg-indigo-100 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <NavTitle href="#">
                <h1>Kane Quinlan</h1>
              </NavTitle>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavButton href="#">About</NavButton>
              <NavButton href="#">CV</NavButton>
              <NavButton href="#">Projects</NavButton>
              <NavButton href="#">Contact</NavButton>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <ThemeButton />
          </div>
          <div className="md:hidden flex items-center">
            <BurgerButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
