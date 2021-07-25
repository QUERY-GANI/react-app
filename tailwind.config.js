module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    height: {
      md: "43%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
