import { Fraunces, Barlow } from "next/font/google";

const frauncesInit = Fraunces({
  weight: "900",
  subsets: ["latin"],
  variable: "--ff-serif",
  fallback: ["serif"],
  preload: true,
  adjustFontFallback: false,
});
const barlowInit = Barlow({
  weight: ["300", "400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--ff-sans-serif",
  fallback: ["sans-serif"],
  preload: true,
  adjustFontFallback: false,
});

export const fraunces = frauncesInit.variable;
export const barlow = barlowInit.variable;
