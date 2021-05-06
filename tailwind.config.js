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
      height: {
        160: "40rem" /* 640px */,
      },
      minWidth: {
        "40/100": "40%",
        "20/100": "20%",
        "16/100": "16%",
        "11/100": "11.428%",
      },
      minHeight: {
        80: "20rem" /* 320px */,
      },
      maxWidth: {
        "90vw": "90vw",
      },
      maxHeight: {
        160: "40rem" /* 640px */,
        "90vh": "90vh",
      },
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
