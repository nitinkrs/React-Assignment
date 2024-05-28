/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f3f4f9",
        gainsboro: {
          "100": "#e7e8e8",
          "200": "#e5e7eb",
          "300": "#e3e4e7",
          "400": "#dddede",
          "500": "rgba(217, 217, 217, 0.5)",
        },
        gray: {
          "100": "#888a8e",
          "200": "#7e8084",
          "300": "#74767a",
          "400": "#1f2937",
          "500": "#0f172a",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        darkgray: "#a6a8ac",
        white: "#fff",
        orange: "#fc9d03",
        lightgray: "#c7d3df",
        whitesmoke: {
          "100": "#f7f8fb",
          "200": "#f3f6f9",
          "300": "#eeefef",
          "400": "#edeef1",
        },
        seagreen: "#52924c",
        lavender: "#dae4ee",
        slategray: {
          "100": "#707494",
          "200": "#67768e",
          "300": "#5f677a",
          "400": "rgba(112, 116, 148, 0.1)",
        },
        black: "#000",
        dimgray: "#4b5563",
        mediumslateblue: {
          "100": "#5d5fef",
          "200": "rgba(102, 106, 246, 0.2)",
        },
        lightsteelblue: "#b7c6de",
        darkslateblue: "#23235f",
      },
      spacing: {
        "navigations-breadcrumb-separator-height": "12px",
        "navigations-breadcrumb-inline-gap-between": "10px",
        "navigations-breadcrumb-icon-size": "16px",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
        "8xs": "5px",
        "10xs": "3px",
        "4xs-1": "8.1px",
      },
    },
    fontSize: {
      "4xs": "9px",
      xs: "12px",
      "2xs": "11px",
      smi: "13px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
