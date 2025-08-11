/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7f3d9e",
        secondary: "#6d00d9",
        accent: "#beff1b",
        "accent-dark": "#791fd3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        league: ["League Gothic", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 60% 40%, #7f3d9e 0%, #6d00d9 100%)',
      },
    },
  },
  plugins: [],
};