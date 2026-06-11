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
        'primary-dark': '#00492C', // Forest Green
        'energy': '#FBBA16',       // Electric Yellow
        'airy': '#9BCCD0',         // Ice Blue
        'navy': '#1E4380',         // Deep Navy
        'surface': '#FFFFFF',      // Crisp White
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
