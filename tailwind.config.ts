import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yello': '#FFC80F',
        'black': '#121212',
      },
      fontFamily: {
        pulang: ['Pulang', 'sans-serif'], // Custom font
        halo: ['Halo Dek', 'serif'], // Custom font
      },
    },
  },
  plugins: [],
} satisfies Config;
