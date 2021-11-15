# eslint-config-javascript-react
[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-javascript-react.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-javascript-react)

ESLint config for JavaScript + React projects

## Usage
1. Install package:
```
npm install @goodrequest/eslint-config-javascript-react --save-dev
```

2. Create `.eslintrc.json` file in your project root directory and add following lines:
```
{
  "extends": ["@goodrequest/eslint-config-javascript-react"]
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
