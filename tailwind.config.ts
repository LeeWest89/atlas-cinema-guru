/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        placeholder: '#b0b0b0',
      },
      placeholderColor: {
        custom: '#b0b0b0',
      },
    },
  },
  plugins: [],
};
