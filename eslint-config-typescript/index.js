const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const importX = require("eslint-plugin-import-x");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const globals = require("globals");
const airbnb = require("./airbnb");
const typescript = require("./typescript");

module.exports = [
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.es2024 },
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      import: importX,
    },
    settings: {
      "import-x/resolver-next": [importX.createNodeResolver({ extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"] })],
      "import-x/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
      "import-x/external-module-folders": ["node_modules", "node_modules/@types"],
      "import-x/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"],
    },
    rules: airbnb,
  },
  ...tsPlugin.configs["flat/recommended"],
  ...typescript,
  {
    rules: {
      "lines-between-class-members": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  prettierRecommended,
];
