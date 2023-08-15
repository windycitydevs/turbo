/**@type {import("prettier/index").Options} */

export default {
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
  plugins: [
    import("prettier-plugin-tailwindcss"),
    import("prettier-plugin-organize-imports")
  ]
};
