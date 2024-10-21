import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";
import tailwindcssMotion from "tailwindcss-motion";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ajoute la police Days One pour les gros titres
        sans: ["Darker Grotesque", "sans-serif"], // pour les petits caractères
        display: ["Days One", "sans-serif"], // pour les gros caractères
      },
    },
  },
  plugins: [lineClamp, tailwindcssMotion],
};

export default config;
