/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        cello: {
          50: "#f3f6fc",
          100: "#e6edf8",
          200: "#c8daef",
          300: "#97bbe2",
          400: "#6098d0",
          500: "#3b7bbc",
          600: "#2b609e",
          700: "#244d80",
          800: "#21426b",
          900: "#1f3756",
          950: "#15243c",
        },
        haiti: {
          50: "#eef4ff",
          100: "#e0eaff",
          200: "#c6d7ff",
          300: "#a4bbfd",
          400: "#8096f9",
          500: "#6272f2",
          600: "#4449e7",
          700: "#3637cc",
          800: "#2f32a4",
          900: "#2d3282",
          950: "#141539",
        },
      },
    },
  },

  plugins: [],
};
