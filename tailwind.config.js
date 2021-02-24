const screens = require("./tailwind/screens")
const colors = require("./tailwind/colors")
const variants = require("./tailwind/variants")
const fontFamily = require("./tailwind/fontFamily")
const fontSize = require("./tailwind/fontSize")

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors,
    },
    screens,
    fontFamily,
    fontSize,
  },
  variants: {
    extend: variants,
  },
  plugins: [require("@tailwindcss/typography")],
}
