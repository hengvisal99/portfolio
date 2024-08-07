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
        lightDark : '#0c0c13',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
      }
    },
    screens: {
      'xs' : '370px', 
      'sm': '500px',   // Small screens and up
      'md': '768px',   // Medium screens and up
      'lg': '1024px',  // Large screens and up
      'xl': '1280px',  // Extra large screens and up
      '2xl': '1536px', // 2X large screens and up
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
