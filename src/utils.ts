import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All available weights
  variable: "--font-raleway", // CSS variable name
});
