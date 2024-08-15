/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If using the `app` directory
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#C9C9C9",
        main: "#007B8D",
        secondary: "#2F3146",
      },
    },
  },
  plugins: [],
};
