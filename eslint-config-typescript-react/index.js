module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["airbnb", "airbnb/hooks", "plugin:@typescript-eslint/recommended", "airbnb-typescript", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "default-case": "warn",
    "yoda": "warn",
    "func-names": "error",
    "default-param-last": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-boolean-value": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/no-unused-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/no-unstable-nested-components": "off",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/interactive-supports-focus": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/control-has-associated-label": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/ban-types": "off"
  },
};