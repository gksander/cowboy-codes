const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.blue,
      },

      // Add a `breakout` class for the Experience scroll section, so we can breakout of container.
      spacing: ({ theme }) => {
        const maxWidth3 = theme("maxWidth.4xl");
        const space5 = "1.25rem";
        const spaces = defaultTheme.spacing;

        return {
          breakout: `calc(max(0vw, (100vw - ${maxWidth3}) / 2) + ${space5})`,
          ...["0", "1", "2", "8"].reduce((acc, key) => {
            acc[`half-${key}`] = `calc(50% - ${spaces[key]} / 2)`;
            return acc;
          }, {}),
        };
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
