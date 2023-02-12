/**
 * @type {import("eslint").ESLint.ConfigData}
 */
module.exports = {
  root: true,
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"]
    },
    react: {
      version: "detect"
    }
  }
};
