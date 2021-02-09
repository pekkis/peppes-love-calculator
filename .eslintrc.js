module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "react-app",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["@typescript-eslint", "@emotion", "jsx-a11y"],
  parser: "@typescript-eslint/parser",
  rules: {}
};
