import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: "rgba(144, 144, 144, 1)",
        mainOrange: "rgba(243, 99, 38, 1)",
        lightBase: "rgba(255, 255, 255, 1)",
        lighterShade: "rgba(255, 255, 255, 0.1)",
        lightText: "rgba(17, 20, 45, 1)",
        lighterText: "rgba(81, 81, 81, 1)",
        lightGrey: "rgba(154, 154, 176, 1)",
        primaBlue: "rgba(16, 155, 233, 1)",
      },
      fontWeight: {
        soThick: '700',
        lightThin: "400",
      }
    },
  },
  plugins: [],
};
export default config;
