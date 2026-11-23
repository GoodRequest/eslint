const disableTypeChecked = require("@typescript-eslint/eslint-plugin").configs["flat/disable-type-checked"];
const bestPractices = require("./airbnb/best-practices");
const es6 = require("./airbnb/es6");
const imports = require("./airbnb/imports");
const style = require("./airbnb/style");
const variables = require("./airbnb/variables");

const [extensionsSeverity, extensionsMode, extensionsMap] = imports["import/extensions"];
const [extraneousSeverity, extraneousOptions] = imports["import/no-extraneous-dependencies"];

module.exports = [
  {
    rules: {
      camelcase: "off",
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
      "no-return-await": "off",
      "@typescript-eslint/return-await": [bestPractices["no-return-await"], "in-try-catch"],
      "import/extensions": [extensionsSeverity, extensionsMode, { ...extensionsMap, ts: "never", tsx: "never" }],
      "import/no-extraneous-dependencies": [
        extraneousSeverity,
        {
          ...extraneousOptions,
          devDependencies: [
            ...extraneousOptions.devDependencies.flatMap((pattern) => {
              const tsPattern = pattern.replace(/\bjs(x?)\b/g, "ts$1");
              return tsPattern === pattern ? [pattern] : [pattern, tsPattern];
            }),
            "**/eslint.config.{js,mjs,cjs,ts,mts,cts}",
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    rules: {
      "valid-typeof": "off",
      "import/named": "off",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",
    },
  },
  {
    ...disableTypeChecked,
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      ...disableTypeChecked.rules,
      "dot-notation": bestPractices["dot-notation"],
      "no-implied-eval": bestPractices["no-implied-eval"],
      "no-new-func": bestPractices["no-new-func"],
      "no-throw-literal": bestPractices["no-throw-literal"],
      "no-return-await": bestPractices["no-return-await"],
    },
  },
  {
    files: ["**/*.js", "**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
