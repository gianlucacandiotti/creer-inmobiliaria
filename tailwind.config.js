const screens = require("./tailwind/screens")
const colors = require("./tailwind/colors")
const variants = require("./tailwind/variants")
const fontFamily = require("./tailwind/fontFamily")

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors,
    },
    screens,
    fontFamily,
    // Class overrides
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: variants,
  },
  plugins: [require("@tailwindcss/typography")],
}
