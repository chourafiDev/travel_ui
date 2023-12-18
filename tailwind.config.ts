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
        primary: "#8bc6ec",
        secondary: "#9599e2",
        dark: "#040836",
        "dark-2": "#313533",
        "dark-3": "#1c1f1d",
        "dark-4": "#171717",
        gray: "#9999a1",
        white: "#ffffff",
      },
      backgroundImage: {
        "hero-line": "url('/assets/imgs/hero-line.png')",
        "footer-dots": "url('/assets/imgs/footer-dots-min.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
