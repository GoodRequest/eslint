# eslint-config-javascript-react
[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-javascript-react.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-javascript-react)

ESLint config for JavaScript + React projects

## Usage
1. If using **npm 7+** you can install this package and npm automatically installs all peer dependencies.
```
npm install @goodrequest/eslint-config-javascript-react --save-dev
```

If you are using an **older npm** version, then the **next step** is to install all the peer dependencies listed with:
```
npm info "@goodrequest/eslint-config-javascript-react" peerDependencies

{
  eslint: '8.2.0',
  'eslint-plugin-import': '2.25.3',
  'eslint-plugin-jsx-a11y': '6.5.1',
  'eslint-plugin-prettier': '4.0.0',
  'eslint-plugin-react': '7.27.0',
  'eslint-plugin-react-hooks': '4.3.0',
  prettier: '2.4.1'
}
```
Here is `npm install` command you can use:
```
npm install eslint@8.2.0 eslint-plugin-import@2.25.3 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-prettier@4.0.0 eslint-plugin-react@7.27.0 eslint-plugin-react-hooks@4.3.0 prettier@2.4.1 --save-dev
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
