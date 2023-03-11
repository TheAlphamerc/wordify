"use client";

import { Inter, Source_Serif_Pro } from "next/font/google";
import HomePage from "./((home))/home.page";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Source_Serif_Pro({
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
