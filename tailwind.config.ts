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
        sans: ["Darker Grotesque", "sans-serif"],
        display: ["Days One", "sans-serif"],
      },
      animation: {
        scroll: "scroll 20s linear infinite", // Animation pour le défilement
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [lineClamp, tailwindcssMotion],
};

export default config;
