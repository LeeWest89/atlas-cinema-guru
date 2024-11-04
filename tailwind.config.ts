/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        placeholderGrey: '#b0b0b0',
        Teal: '#1ED2AF',
        greenTeal: '#20a48e',
        darkBlue: '#00003c',
      },
    },
  },
  plugins: [],
};
