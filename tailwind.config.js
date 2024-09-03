/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        green: "#16a34a",
        darkcustom: "#10121e",
        red: "#ff0000",
      },
      boxShadow: {
        xl: "0px 10px 60px 0px rgb(0,0,0,0.25)",
      },
      backgroundImage: {
        page: "url('./assets/image/setu-sedong-senja.jpeg')",
        pagedark: "url('./assets/image/jembatan-cigantung1.jpeg')",
        site: "url('./assets/image/kopi.jpg')",
        sitedark: "url('./assets/image/medieval.jpg')",
        sitepage: "url('./assets/image/setu-sedong.jpeg')",
        sitepagedark: "url('./assets/image/sawah.jpg')",
        taman: "url('./assets/image/taman1.jpg')",
        tamandark: "url('./assets/image/taman2.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".dark .text-outline-none": {
          textShadow: "none",
        },
        ".text-shadow-sm": {
          textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow-lg": {
          textShadow: "0 7px 16px rgba(0, 0, 0, 0.7)",
        },
        ".text-outline-black": {
          textShadow: "0.3px 0.3px 1px #000",
        },
        ".text-outline-white": {
          textShadow: "0.3px 0.3px 1px #fff",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
