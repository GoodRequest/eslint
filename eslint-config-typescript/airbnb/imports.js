module.exports = {
  "import/no-unresolved": [
    "error",
    {
      "commonjs": true,
      "caseSensitive": true
    }
  ],
  "import/named": "error",
  "import/export": "error",
  "import/no-named-as-default": "error",
  "import/no-named-as-default-member": "error",
  "import/no-extraneous-dependencies": [
    "error",
    {
      "devDependencies": [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx}",
        "test-*.{js,jsx}",
        "**/*{.,_}{test,spec}.{js,jsx}",
        "**/jest.config.js",
        "**/jest.setup.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js",
        "**/karma.conf.js",
        "**/.eslintrc.js"
      ],
      "optionalDependencies": false
    }
  ],
  "import/no-mutable-exports": "error",
  "import/no-amd": "error",
  "import/first": "error",
  "import/no-duplicates": "error",
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      "js": "never",
      "mjs": "never",
      "jsx": "never"
    }
  ],
  "import/order": [
    "error",
    {
      "groups": [
        [
          "builtin",
          "external",
          "internal"
        ]
      ]
    }
  ],
  "import/newline-after-import": "error",
  "import/prefer-default-export": "error",
  "import/no-absolute-path": "error",
  "import/no-dynamic-require": "error",
  "import/no-webpack-loader-syntax": "error",
  "import/no-named-default": "error",
  "import/no-self-import": "error",
  "import/no-cycle": [
    "error",
    {
      "maxDepth": "∞"
    }
  ],
  "import/no-useless-path-segments": [
    "error",
    {
      "commonjs": true
    }
  ],
  "import/no-import-module-exports": [
    "error",
    {
      "exceptions": []
    }
  ],
  "import/no-relative-packages": "error",
};
