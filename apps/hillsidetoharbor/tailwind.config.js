/**
 * @type {import("tailwindcss/colors")}
 */
const colors = require("tailwindcss/colors");
/**
 * @type {import('tailwindcss/defaultTheme')}
 */
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  presets: [require("@windycitydevs/ui/tailwind")],
  content: [
    "../../node_modules/@windycitydevs/ui/**/*.{ts,tsx,js,jsx}",
    "app/**/*.{js,ts,jsx,tsx,mdx}",
    "ui/**/*.{ts,js,tsx,jsx,mdx}",
    "lib/**/*.{ts,js,tsx,jsx,mdx}"
  ],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    screens: {
      "8xs": "200px",
      "7xs": "225px",
      "6xs": "250px",
      "5xs": "275px",
      "4xs": "300px",
      "3xs": "325px",
      "2xs": "350px",
      xs: "375px",
      smxs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1820px",
      "4xl": "2040px",
      "5xl": "2360px",
      "6xl": "2780px"
    },
    extend: {
      maxWidth: {
        "10xl": "173.75rem", // 2780 px
        "9xl": "121rem", // 1936px
        "8xl": "96rem" // 1536px
      },
      colors: {
        iconGray: "#272729",
        basicallyBlack: "#141415",
        pencilPurple: "#3B2DB0",
        neutral: "#F9F2E8",
        "wcd-blue": "#B3DDF2",
        "akane-red": "#ea5532",
        h2hDarkGreen: "#4E5F4F",
        h2hTurquoise: "#91D3CA",
        h2hPinkOrange: "#F49A7A",
        lightPink: "#FF80B5",
        lavender: "#9089FC",
        "wcd-red": "#FF0000",
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        gray: colors.zinc,
        "gray-1000": "rgb(17,17,19)",
        "gray-1100": "rgb(10,10,11)",
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA"
        }
      },
      backgroundImage: ({ theme }) => ({
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.500"
        )}, 50px, ${theme("colors.gray.800")} 50%)`
      }),
      fontFamily: {
        "basis-grotesque-pro": [
          "var(--font-basis-grotesque-pro)",
          ...defaultTheme.fontFamily.sans
        ],
        "domaine-display-condensed": [
          "var(--font-domaine-display-condensed)",
          ...defaultTheme.fontFamily.serif
        ],
        "kaisei-tokumin": [
          "var(--font-kaisei-tokumin)",
          ...defaultTheme.fontFamily.sans
        ]
      },
      animation: {
        wiggle: "wiggle 10s ease-in-out infinite",
        hero: "hero 1s ease-in-out infinite",
        slowPing: "pulse 10s cubic-bezier(0, 0, 0.2, 1) infinite",
        slowWave: "wave 10s ease-in-out",
        wave: "wave 560ms ease-in-out"
      },
      dropShadow: {
        testimonial: "1px 1px 5px 0px rgba(0, 0, 0, 0.84)"
      },
      boxShadow: {
        "outline-2": "0 0 0 2px var(--accents-0)",
        "outline-normal": "0 0 0 2px var(--accents-2)",
        refinement: "0px 2px 5px 0px #d7d7d7",
        testimonial: "5px 5px 5px 0px rgba(0, 0, 0, 0.35)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
        cardHover:
          "0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)",
        activeShadow:
          "inset 0 1px 4px 0 rgb(119 122 175 / 40%), inset 0 1px 1px 0 rgb(119 122 175 / 40%), 0 1px 0 0 rgb(35 38 59 / 5%)",
        titleShadow: "0 1px 0 0 rgb(35 38 59 / 5%)"
      },
      width: { "8xl": "96rem" },
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            ["border-color"]: theme("colors.vercel.pink")
          },
          "40%": {
            ["border-color"]: theme("colors.vercel.pink")
          }
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white")
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white")
          }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        hero: { transform: "translate3d(0px, 0px, 0px)" },
        wave: {
          "0%, 100%": {
            transform: "rotate(0)"
          },
          "20%, 60%": {
            transform: "rotate(-25deg)"
          },
          "40%, 80%": {
            transform: "rotate(10deg)"
          }
        },
        loading: {
          "0%": {
            opacity: ".2"
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)"
          },
          to: {
            opacity: ".2"
          }
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)"
          }
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)"
          }
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1
          },
          "40%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          }
        }
      })
    }
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")
  ]
};
