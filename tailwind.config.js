/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        'times-new-romance': ['"TimesNewRomance"', 'sans-serif'],
        apercu: ["Apercu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
