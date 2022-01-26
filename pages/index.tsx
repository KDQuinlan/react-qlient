import React from "react";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

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
                  <a
                    href="#"
                    className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 dark:text-gray-300"
                  >
                    <span className="font-bold">Kane Quinlan</span>
                  </a>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900 font-semibold dark:text-gray-300"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900 font-semibold dark:text-gray-300"
                  >
                    CV
                  </a>
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900 font-semibold dark:text-gray-300"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900 font-semibold dark:text-gray-300"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <button
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 rounded transition duration-300 dark:bg-gray-800"
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                >
                  {theme === "light" ? "☀️" : "🌙"}
                </button>
              </div>

              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
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
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
