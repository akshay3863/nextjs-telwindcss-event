module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      whitelist: ["overflow-hidden"],
    },
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    screens: {
      "2xs": "280px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        black: "#2D2D2D",
        white: "#FFFFFF",
        pr: "#2C7358",
        gp: "#E4E4E4",
        error: "#EF4444",
        primaryBlack: "#161616",
      },
      inset: {
        "1/2": "50%",
        "-1/2": "-50%",
        "2/4": "50%",
        "-2/4": "-50%",
      },
      lineHeight: {
        none: "1",
        tight: "1.2",
        snug: "1.3",
        normal: "1.5",
        relaxed: "1.57",
        loose: "1.66",
      },
      fontSize: {
        "2xs": "0.625rem", //10px
        xs: "0.75rem", //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        smd: "1.125rem", //18px
        md: "1.25rem", //20px
        lg: "1.5rem", //24px
        xl: "2rem", //32px
        "2xl": "2.25rem", //36px
        "3xl": "3rem", //48px
        "4xl": "3.75rem", //60px
        "5xl": "4.5rem", //72px
      },
      screen: {
        "2xl": "1536px",
      },
      spacing: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        7: "1.875rem",
        14: "3.5rem",
        15: "3.75rem",
        29: "7.5rem",
        60: "15rem",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
