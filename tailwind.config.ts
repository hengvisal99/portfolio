import { colors } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('/hero-bg.jpg')",
    },
    fontFamily: {
      dark: "var(--font-jetbrainsMono)"
    },
    extend: {
      colors: {
        dark: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        }
      }
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            success: {
              DEFAULT: "#00ff99",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
export default config;
