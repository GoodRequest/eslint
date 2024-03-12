# eslint-config-typescript-next
[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript-next.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript-next)

ESLint config for Next.js + TypeScript projects

## Usage
1. You can install package using this command:
```
npm install @goodrequest/eslint-config-typescript-next --save-dev
```

2. **Next step** is to install all the peer dependencies:
```
npm install @next/eslint-plugin-next@^14.1.3 @typescript-eslint/eslint-plugin@^7.2.0 eslint@^8.57.0 eslint-plugin-import@^2.29.1 eslint-plugin-jsx-a11y@^6.8.0 eslint-plugin-prettier@^5.1.3 eslint-plugin-react@^7.34.0 eslint-plugin-react-hooks@^4.6.0 prettier@^3.2.5 --save-dev
```

3. Create `.eslintrc.json` file in your project root directory and add following lines:
```
{
  "extends": ["@goodrequest/eslint-config-typescript-next"]
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
