/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-Light-Cyan": "hsl(193, 38%, 86%)",
        "custom-Neon-Green": "hsl(150, 100%, 66%)",
        "custom-Grayish-Blue": "hsl(217, 19%, 38%)",
        "custom-Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "custom-Dark-Blue": "hsl(218, 23%, 16%)",
      },
      fontSize: {
        quote: "28px",
      },
    },
  },
  plugins: [],
};
