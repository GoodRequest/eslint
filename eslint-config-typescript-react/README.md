# eslint-config-typescript-react
[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript-react.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript-react)

ESLint config for React + TypeScript projects

## Usage
1. You can install package using this command:
```
npm install @goodrequest/eslint-config-typescript-react --save-dev
```

2. **Next step** is to install all the peer dependencies:
```
npm install eslint@^8.50.0 eslint-plugin-import@^2.28.1 eslint-plugin-jsx-a11y@^6.7.1 eslint-plugin-prettier@^5.0.0 eslint-plugin-react@^7.33.2 eslint-plugin-react-hooks@^4.6.0 @typescript-eslint/eslint-plugin@^6.7.4 prettier@^3.0.3 --save-dev
```

3. Create `.eslintrc.json` file in your project root directory and add following lines:
```
{
  "extends": ["@goodrequest/eslint-config-typescript-react"]
}
```

4. Create `.prettierrc.json` file in your project root directory and add following lines:
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

5. Create `.editorconfig` file in your project root directory and add following lines:
```
[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
