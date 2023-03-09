"use client";

import SvgIcon from "@/component/icons/svg-icon";
import { Inter } from "next/font/google";
import HomePage from "./((home))/home.page";
import { useTheme } from "./hook/use-theme.hook";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toggleTheme, darkMode } = useTheme();
  return (
    <main className={"bg-default min-h-screen"}>
      <HomePage />
    </main>
  );
}
