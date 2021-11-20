module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    project: "./tsconfig.json",
  },
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
};
