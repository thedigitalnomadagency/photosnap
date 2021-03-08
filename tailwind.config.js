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
      backgroundImage: () => ({
        create: "url('/images/home/desktop/create-and-share.jpg')",
        "create-md": "url('/images/home/tablet/create-and-share.jpg')",
        "create-sm": "url('/images/home/mobile/create-and-share.jpg')",
      }),
      spacing: {
        294: "294px",
        600: "600px",
        650: "650px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
