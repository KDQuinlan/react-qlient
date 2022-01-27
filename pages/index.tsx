import React from "react";
import Head from "next/head";
import ThemeButton from "../components/ToggleTheme";
import { NavTitle, NavButton } from "../components/navigation/NavButton";
import BurgerButton from "../components/navigation/BurgerButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kane Quinlan</title>
        <meta name="description" content="Kane Quinlan's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen dark:bg-gray-900">
        <nav className="bg-indigo-100 dark:bg-gray-700">
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
      </main>
    </div>
  );
}
