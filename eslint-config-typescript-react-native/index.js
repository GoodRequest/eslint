module.exports = {
    env: {
        browser: true,
        es2024: true,
    },
    plugins: ['@typescript-eslint', '@tanstack/query', 'prettier'],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'expo',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['/dist/*'],
    rules: {
        // react
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
            },
        ],
        'react/no-unstable-nested-components': [
            'error',
            {
                allowAsProps: true,
            },
        ],
        'react/jsx-key': 'warn',

        // import
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['internal', 'parent'], ['sibling', 'index'], 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                distinctGroup: false,
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    orderImportKind: 'asc',
                    caseInsensitive: false,
                },
            },
        ],

        // @typescript-eslint
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: ['enum'],
                format: ['UPPER_CASE'],
            },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',

        // sort-imports
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
    },
}
