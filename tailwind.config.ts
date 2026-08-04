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
        iron: {
          bg: '#0A0A0A',
          crimson: '#E11D48',
          yellow: '#FACC15',
        },
      },
      fontFamily: {
        sans: ['Syne', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
