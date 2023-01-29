/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "748px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        default: 0,
        lg: "100px",
        xl: "100px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#1AB587",
        secondary: "#FFA33D",
        textp: "#333333",
      },
    },
  },
  plugins: [],
};
