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
        140: "35rem" /* 560px */,
        160: "40rem" /* 640px */,
      },
      minWidth: {
        "10/100": "10%",
        "11/100": "11.428571429%",
        "12/100": "12.142857143%",
        "13/100": "13.333333333%",
        "15/100": "15%",
        "16/100": "16%",
        "17/100": "17%",
        "18/100": "18%",
        "20/100": "20%",
        "21/100": "21.25%",
        "22/100": "22.5%",
        "40/100": "40%",
        "42/100": "42.5%",
        "45/100": "45%",
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
