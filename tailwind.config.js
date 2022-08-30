/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/.{js,jsx,html}",
    "./src/*.{js,jsx,html}",
    "./src/**/**/*.{js,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#100720",
        primaryLight: "#353047",
        primaryDark: "#000000",
        secondary: "#F92FB5",
        secondaryLight: "#FF6EE7",
        secondaryDark: "#C20085",
        textWhite: "#FFFFFF",
        textBlack: "#000000",
        dullText: "#BBB6B6",
        background: "#100720",
        surface: "#31087B",
      },
      fontFamily: {
        headline: ["League Spartan"],
        body: ["Libre Baskerville"],
      },
      spacing: {
        "50vw": "50vw",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },

          "40%": { transform: "rotate(-8deg)" },

          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },

    animation: {
      "waving-hand": "wave 500ms linear",
    },

    plugins: [],
  },
};
