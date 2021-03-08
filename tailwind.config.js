module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        lightGrey: "#dfdfdf",
        primary: "#ffc593",
        secondary: "#bc7198",
        tertiary: "#5a77ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
