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
        stories: "url('/images/home/desktop/beautiful-stories.jpg')",
        "stories-md": "url('/images/home/tablet/beautiful-stories.jpg')",
        "stories-sm": "url('/images/home/mobile/beautiful-stories.jpg')",
        designed: "url('/images/home/desktop/designed-for-everyone.jpg')",
        "designed-md": "url('/images/home/tablet/designed-for-everyone.jpg')",
        "designed-sm": "url('/images/home/mobile/designed-for-everyone.jpg')",
        mountains: "url('/images/stories/desktop/mountains.jpg')",
        "mountains-sm": "url('/images/stories/mobile/mountains.jpg')",
        cityscapes: "url('/images/stories/desktop/cityscapes.jpg')",
        "cityscapes-sm": "url('/images/stories/mobile/cityscapes.jpg')",
        voyage: "url('/images/stories/desktop/18-days-voyage.jpg')",
        "voyage-sm": "url('/images/stories/mobile/18-days-voyage.jpg')",
        architecturals: "url('/images/stories/desktop/architecturals.jpg')",
        "architecturals-sm": "url('/images/stories/mobile/architecturals.jpg')",
      }),
      spacing: {
        270: "270px",
        294: "294px",
        375: "375px",
        500: "500px",
        600: "600px",
        650: "650px",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
