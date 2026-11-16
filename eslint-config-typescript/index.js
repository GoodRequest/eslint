const { rules: bestPractices } = require("eslint-config-airbnb-base/rules/best-practices");
const { rules: es6 } = require("eslint-config-airbnb-base/rules/es6");
const { rules: imports } = require("eslint-config-airbnb-base/rules/imports");
const { rules: style } = require("eslint-config-airbnb-base/rules/style");
const { rules: variables } = require("eslint-config-airbnb-base/rules/variables");

const [extensionsSeverity, extensionsMode, extensionsMap] = imports["import/extensions"];
const [extraneousSeverity, extraneousOptions] = imports["import/no-extraneous-dependencies"];

module.exports = {
  env: {
    node: true,
    es2024: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  rules: {
    camelcase: "off",
    "@typescript-eslint/naming-convention": "off",

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": bestPractices["default-param-last"],
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": bestPractices["dot-notation"],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": style["no-array-constructor"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": es6["no-dupe-class-members"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": bestPractices["no-empty-function"],
    "no-implied-eval": "off",
    "no-new-func": "off",
    "@typescript-eslint/no-implied-eval": bestPractices["no-implied-eval"],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": bestPractices["no-redeclare"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": variables["no-shadow"],
    "no-throw-literal": "off",
    "@typescript-eslint/only-throw-error": bestPractices["no-throw-literal"],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": bestPractices["no-unused-expressions"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": variables["no-unused-vars"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": variables["no-use-before-define"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": es6["no-useless-constructor"],
    "require-await": "off",
    "@typescript-eslint/require-await": bestPractices["require-await"],
    "no-return-await": "off",
    "@typescript-eslint/return-await": [bestPractices["no-return-await"], "in-try-catch"],

    "lines-between-class-members": "off",
    "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
    "@typescript-eslint/no-floating-promises": "error",

    "import/extensions": [extensionsSeverity, extensionsMode, { ...extensionsMap, ts: "never", tsx: "never" }],
    "import/no-extraneous-dependencies": [
      extraneousSeverity,
      {
        ...extraneousOptions,
        devDependencies: extraneousOptions.devDependencies.flatMap((pattern) => {
          const tsPattern = pattern.replace(/\bjs(x?)\b/g, "ts$1");
          return tsPattern === pattern ? [pattern] : [pattern, tsPattern];
        }),
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "constructor-super": "off",
        "getter-return": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",
        "import/named": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
};
