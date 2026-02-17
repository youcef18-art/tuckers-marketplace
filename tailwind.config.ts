import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4D2E", // Deep Forest Green
        secondary: "#C9A84C", // Warm Gold
        background: "#FFF8F0", // Warm Cream
        accent: "#722F37", // Rich Burgundy
        charcoal: "#2D2D2D", // Text
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
