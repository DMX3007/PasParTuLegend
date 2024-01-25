import { Comfortaa } from "next/font/google";
import { Rubik_Mono_One } from "next/font/google";

export const comfortaa = Comfortaa({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-comfortaa",
});
export const rubic = Rubik_Mono_One({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-rubic",
});
