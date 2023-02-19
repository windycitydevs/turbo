/**
 * "wcd-red": "#FF0000",
 * "wcd-blue": "#B3DDF2"
 *
 */
const colors = {
  blue: "#2882ef",
  lightblue: "#2882ef",
  violet: "#8524c3",
  rosa: "#f02888",
  yellow: "#f9c32a",
  orange: "#f97449",
  "wcd-blue": "#B3DDF2",
  "akane-red": "#ea5532",
  "wcd-red": "#FF0000",
  "sakura-pink": "#da5283",
  "fuji-purple": "#9b72b0",
  "sorairo-blue": "#4c9bcf",
  "asagi-blue": "#51b1bf",
  "matsuba-green": "#abb436",
  "yamabuki-yellow": "#eba800",
  "azuki-maroon": "#891515",
  accents: {
    0: "#fff",
    1: "#fafafa",
    2: "#eaeaea",
    3: "#999",
    4: "#888",
    5: "#666",
    6: "#444",
    7: "#333",
    8: "#111",
    9: "#000"
  },
  success: {
    DEFAULT: "#0070f3",
    dark: "#0761d1",
    light: "#3291ff",
    lighter: "#d3e5ff"
  },
  error: {
    DEFAULT: "#e00",
    dark: "#c50000",
    light: "#ff1a1a",
    lighter: "#f7d4d6"
  },
  warning: {
    DEFAULT: "#f5a623",
    dark: "#ab570a",
    light: "#f7b955",
    lighter: "#ffefcf"
  },
  violet: {
    DEFAULT: "#7928ca",
    dark: "#4c2889",
    light: "#8a63d2",
    lighter: "#e3d7fc"
  },
  cyan: {
    DEFAULT: "#50e3c2",
    dark: "#29bc9b",
    light: "#79ffe1",
    lighter: "#aaffec"
  },
  highlight: {
    purple: "#f81ce5",
    magenta: "#eb367f",
    pink: "#ff0080",
    yellow: "#fff500"
  },
  foreground: "#000",
  background: "#fff",
  "text-color": "var(--textColor)",
  primary: "var(--colorPrimary)",
  "primary-contrast": "var(--colorPrimaryContrast)",
  "primary-active": "var(--colorPrimaryActive)",
  "primary-active-contrast": "var(--colorPrimaryActiveContrast)",
  secondary: "var(--colorSecondary)",
  "secondary-contrast": "var(--colorSecondaryContrast)",
  "light-grey": "var(--colorLightGrey)",
  "light-grey-contrast": "var(--colorLightGreyContrast)",
  "medium-grey": "var(--colorMediumGrey)",
  "medium-grey-contrast": "var(--colorMediumGreyContrast)",
  "dark-grey": "var(--colorDarkGrey)",
  "dark-grey-contrast": "var(--colorDarkGreyContrast)"
};

/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
        selection: colors.cyan.light,
        link: {
          DEFAULT: colors.success.DEFAULT,
          light: colors.success.light
        },
        code: colors.rosa,
        secondary: {
          DEFAULT: colors.accents[5],
          dark: colors.accents[7],
          light: colors.accents[3],
          lighter: colors.accents[2]
        }
      }
    }
  }
};
