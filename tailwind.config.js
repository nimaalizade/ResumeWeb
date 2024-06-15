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
  keyframes: {
    typewriter: {
      "0%": {
        width: "0",
        "border-right": "4px solid transparent"
      },
      "100%": {
        width: "100%",
        "border-right": "4px solid currentColor"
      }
    }
  },
  plugins: [],
};
