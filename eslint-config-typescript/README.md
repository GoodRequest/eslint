# eslint-config-typescript

[![npm version](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript.svg)](https://badge.fury.io/js/@goodrequest%2Feslint-config-typescript)

ESLint config for TypeScript projects.

## Usage

1. Install the package with its peer dependencies (ESLint 10 needs Node.js `^20.19.0 || ^22.13.0 || >=24`):

```
npm install @goodrequest/eslint-config-typescript eslint@^10.0.0 prettier@^3.2.5 --save-dev
```

2. **Next step** is to make sure `typescript` (`>=4.8.4 <6.1.0`) is installed in your project. TypeScript and import plugins, the parser and Prettier integration are bundled.

3. Create `eslint.config.js` file in your project root directory and add following lines:

```
const goodrequest = require("@goodrequest/eslint-config-typescript");

module.exports = [
  ...goodrequest,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: { project: "./tsconfig.json", tsconfigRootDir: __dirname },
    },
  },
];
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

2.0 moves to ESLint 10 flat config, typescript-eslint v8 and `eslint-plugin-import-x`. The `eslint-config-airbnb-base` rules are vendored in `airbnb/` (MIT, see `airbnb/LICENSE.md`), so the rule set stays the same.

1. Update dependencies. Plugins and the parser are now dependencies of this package, so they can be removed from your project unless you import them yourself:

```
npm install @goodrequest/eslint-config-typescript@^2.0.0 eslint@^10.0.0 --save-dev
npm uninstall @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-prettier eslint-config-airbnb-base eslint-config-airbnb-typescript
```

2. Replace `.eslintrc.*` and `.eslintignore` with `eslint.config.js` (see [Usage](#usage)):

- `extends` → spread `...goodrequest` first.
- `parserOptions` → `languageOptions.parserOptions` in an object with `files: ["**/*.ts"]`, so JS files are linted without type information. `env` → `languageOptions.globals`.
- `ignorePatterns` / `.eslintignore` → `{ ignores: [...] }` object.
- `overrides` → separate objects with `files`; glob `*.ts` becomes `**/*.ts`.
- Remove `--ext` from `eslint` CLI scripts, `.ts` files are linted by default.

3. `import/*` rule names stay the same (`eslint-plugin-import-x` is registered under the `import` prefix). Plugin settings use the `import-x/` prefix, e.g. `import-x/resolver-next`.

4. Rename rules in your own config and `eslint-disable` comments:

| 1.x                                                                          | 2.0                                                                                                                                   |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `@typescript-eslint/ban-types`                                               | `@typescript-eslint/no-empty-object-type`, `@typescript-eslint/no-unsafe-function-type`, `@typescript-eslint/no-wrapper-object-types` |
| `@typescript-eslint/no-var-requires`                                         | `@typescript-eslint/no-require-imports`                                                                                               |
| `@typescript-eslint/no-throw-literal`                                        | `@typescript-eslint/only-throw-error`                                                                                                 |
| `@typescript-eslint/no-loop-func`, `@typescript-eslint/no-loss-of-precision` | core `no-loop-func`, `no-loss-of-precision`                                                                                           |

5. Expect new findings from upstream defaults:

- `@typescript-eslint/no-unused-vars` reports unused `catch` parameters, use `catch {}` instead of `catch (error) {}`.
- `@typescript-eslint/no-require-imports` reports every `require()` call, not only `const x = require()`.
- `@typescript-eslint/prefer-namespace-keyword` reports `module Foo {}`, use `namespace Foo {}`.
- Unused `eslint-disable` comments are reported as warnings (`linterOptions.reportUnusedDisableDirectives`).
- `no-shadow-restricted-names` reports shadowing `globalThis`, `no-constant-condition` allows `while (true)`.
