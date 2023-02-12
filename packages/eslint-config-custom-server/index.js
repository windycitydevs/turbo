/**@type {import("eslint/index").ESLint.ConfigData} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "turbo"],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true
      }
    }
  ]
};
