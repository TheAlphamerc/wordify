"use client";

import React from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import cx from "classnames";
import SvgIcon from "@/component/icons/svg-icon";
import { useTheme } from "@/app/hook/use-theme.hook";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  display: "swap",
  subsets: ["latin"],
});

/**
 * Appbar component
 */
export default function Appbar() {
  // const [isDark, setIsDark] = React.useState(false);
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div className={`${inter.variable} ${roboto_mono.variable}`}>
      <nav className="flex place-content-between py-6 theme-text-h3 ">
        <SvgIcon className="h-6 w-6 " icon={"Book"} />

        <div className="flex place-content-center gap-2 ">
          {/* <select className="outline-none bg-default">
            <option className="theme-text-h3">Sans</option>
            <option className="theme-text-h3">Serif </option>
          </select> */}
          <button
            className="flex place-content-center"
            onClick={() => {
              // setIsDark(!isDark);
              toggleTheme();
            }}
          >
            <div className="flex items-center">
              <SvgIcon
                className="h-6 w-6 "
                variant={!darkMode ? "dark" : "light"}
                icon={"LightDark"}
              />
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}
