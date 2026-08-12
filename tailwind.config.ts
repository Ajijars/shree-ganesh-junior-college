import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7fc",
          100: "#d6ebf8",
          200: "#b3daf2",
          300: "#7ec8e8",
          400: "#2B92D4",
          500: "#1e7ab8",
          600: "#1F5C86",
          700: "#1a4d70",
          800: "#163d5a",
          900: "#0f2d44",
          950: "#0a1f30",
        },
        accent: {
          100: "#e8f4fc",
          300: "#b8e0f5",
          400: "#7ec8e8",
          500: "#5bb8e0",
          600: "#2B92D4",
          700: "#1F5C86",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
