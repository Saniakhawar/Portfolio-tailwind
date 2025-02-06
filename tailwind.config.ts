import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
    safelist: [
      "border",
      "border-pink-600",
      "rounded-md",
      "bg-transparent",
      "h-[40px]",
      "text-pink-800",
      "text-white",
      "p-2",
      "px-6",
      "text-xl",
      "font-bold",
    ],
  
  
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#08E95E",
      },
    },
  },
  plugins: [],
};

export default config;
