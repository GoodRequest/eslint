module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  plugins: ["@typescript-eslint", "@tanstack/query", "prettier"],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "expo",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ['/dist/*'],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": [
          "enum"
        ],
        "format": [
          "UPPER_CASE"
        ]
      }
    ],
    "sort-imports": ["error", {
      "ignoreDeclarationSort": true
    }],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          [
            "internal",
            "parent"
          ],
          [
            "sibling",
            "index"
          ],
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "distinctGroup": false,
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "orderImportKind": "asc",
          "caseInsensitive": false
        }
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function"
      }
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        "allowAsProps": true
      }
    ],
    "react/jsx-key": "warn"
  },
};