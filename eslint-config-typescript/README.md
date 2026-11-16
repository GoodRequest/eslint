# eslint-config-typescript
[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript)

ESLint config for TypeScript projects.

## Usage
1. You can install package using this command:
```
npm install @goodrequest/eslint-config-typescript --save-dev
```

2. **Next step** is to install all the peer dependencies:
```
npm install eslint@^8.57.0 eslint-plugin-import@^2.29.1 eslint-plugin-prettier@^5.1.3 @typescript-eslint/eslint-plugin@^8.72.1 @typescript-eslint/parser@^8.72.1 prettier@^3.2.5 --save-dev
```

3. Create `.eslintrc.json` file in your project root directory and add following lines:
```
{
  "extends": ["@goodrequest/eslint-config-typescript"]
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

## Migrating from 1.x to 2.0
2.0 moves to typescript-eslint v8 (TypeScript `>=4.8.4 <6.1.0`) and drops `eslint-config-airbnb-typescript`. ESLint 8 and `eslint-config-airbnb-base` stay.

1. Install the new peer dependencies (`@typescript-eslint/parser` is no longer bundled):
```
npm install @goodrequest/eslint-config-typescript@^2.0.0 @typescript-eslint/eslint-plugin@^8.72.1 @typescript-eslint/parser@^8.72.1 --save-dev
```

2. Rename rules in your own config and `eslint-disable` comments:

| 1.x | 2.0 |
| --- | --- |
| `@typescript-eslint/ban-types` | `@typescript-eslint/no-empty-object-type`, `@typescript-eslint/no-unsafe-function-type`, `@typescript-eslint/no-wrapper-object-types` |
| `@typescript-eslint/no-var-requires` | `@typescript-eslint/no-require-imports` |
| `@typescript-eslint/no-throw-literal` | `@typescript-eslint/only-throw-error` |
| `@typescript-eslint/no-loop-func`, `@typescript-eslint/no-loss-of-precision` | core `no-loop-func`, `no-loss-of-precision` |

3. Expect new findings from the typescript-eslint v8 defaults:
- `@typescript-eslint/no-unused-vars` reports unused `catch` parameters, use `catch {}` instead of `catch (error) {}`.
- `@typescript-eslint/no-require-imports` reports every `require()` call, not only `const x = require()`.
- `@typescript-eslint/prefer-namespace-keyword` reports `module Foo {}`, use `namespace Foo {}`.
- `eslint-disable-next-line` placed on the first line of a file no longer applies to file-level rules such as `max-classes-per-file`, use `/* eslint-disable <rule> */` instead.
- JS files linted with `parserOptions.project` must be included in that tsconfig (e.g. `allowJs: true`) or ignored.
