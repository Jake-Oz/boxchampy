import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#E8363A",
      white: "#FFFFFF",
      black: "#000000",
      softGray: "#E8E8E8",
      gray: "#444344",
      image: "#171717",
    },
  },

  plugins: [],
};
export default config;
