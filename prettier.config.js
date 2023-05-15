/**@type {import("prettier/index").Options} */

module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  arrowParens: "avoid",
  useTabs: false,
  tabWidth: 2,
  bracketSameLine: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  quoteProps: "as-needed",
  printWidth: 80,
  plugins: [require("prettier-plugin-tailwindcss")]
};
