/**
 * @type {import("ts-jest").ConfigSet}
 */
module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "mjs",
    "cjs",
    "js",
    "jsx",
    "json",
    "node"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist"
  ],
  preset: "ts-jest"
};
