module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "768px" },
      lg: { min: "769px" },
    },
    extend: {
      spacing: {
        mdCardSize: "300px",
        lgCardSize: "500px",
        mdContainerSize: "700px",
        lgContainerSize: "1070px",
        mdMlCard: "100px",
        mdLgCard: "70px",
      },
      colors: {
        Clear: "#fc8600",
        Rain: "#0181ff",
        Clouds: "#909da2",
        Drizzle: "#0181ff",
        Thunderstorm: "#fff700",
        Snow: "#cecdcd",
        Atmosphere: "#585344",
        Warning: "#fca5a5",
        Cool: "#0181ff",
        Normal: "#34d339",
        darkBgLayout: "#18191B",
        darkBgElement: "#424242",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
