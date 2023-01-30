/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "660px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        default: 0,
        md: "80px",
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
      fontSize: {
        heading1: ["50px", { lineHeight: "64px", letterSpacing: "0.06em" }],
        heading2: ["24px", { lineHeight: "28px", letterSpacing: "0.06em" }],
        subheading1: ["14px", { lineHeight: "26px", letterSpacing: "0.04em" }],
      },
    },
  },
  plugins: [],
};
