module.exports = {
  env: {
    node: true,
    es2024: true,
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
    project: "./tsconfig.json",
  },
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-floating-promises": "error"
  },
};
