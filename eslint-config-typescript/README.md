# eslint-config-typescript
[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript)

ESLint config for TypeScript projects.

## Usage
1. If using **npm 7+** you can install this package and npm automatically installs all peer dependencies.
```
npm install @goodrequest/eslint-config-typescript --save-dev
```

If you are using an older npm version, you have to install all the peer dependencies listed with:
```
npm info "@goodrequest/eslint-config-typescript" peerDependencies
```

2. Create `.eslintrc.json` file in your project root directory and add following lines:
```
{
  "extends": ["@goodrequest/eslint-config-typescript"]
}
```

3. Create `.prettierrc.json` file in your project root directory and add following lines:
```
{
  "useTabs": true,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "none",
  "printWidth": 160,
  "tabWidth": 4
}
```

4. Create `.editorconfig` file in your project root directory and add following lines:
```
[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
