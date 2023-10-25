"use client";

import { Inter, Roboto } from "next/font/google";
import HomePage from "./((home))/home.page";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={nunitoSans.className}>
      <HomePage />
    </div>
  );
}
