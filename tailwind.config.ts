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
        background: "#1C1C1C",
        surface: "#2C2C2C",
      },
      fontFamily: {
        sans: ["HurmeGeometric", "system-ui", "sans-serif"],
        hurme: ["HurmeGeometric", "system-ui", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
};

export default config;
