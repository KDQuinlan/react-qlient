import React from "react";
import tw from "tailwind-styled-components";

const Button = tw.button`
    mobile-menu-butto
`;

const ButtonSvg = tw.svg`
    w-6 
    h-6
    stroke-zinc-700
    dark:stroke-violet-400
`;

const BurgerButton = () => {
  return (
    <Button>
      <ButtonSvg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </ButtonSvg>
    </Button>
  );
};

export default BurgerButton;
