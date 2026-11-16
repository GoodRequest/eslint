module.exports = {
  "camelcase": [
    "error",
    {
      "properties": "never",
      "ignoreDestructuring": false
    }
  ],
  "func-names": "warn",
  "lines-between-class-members": [
    "error",
    "always",
    {
      "exceptAfterSingleLine": false
    }
  ],
  "lines-around-directive": [
    "error",
    {
      "before": "always",
      "after": "always"
    }
  ],
  "new-cap": [
    "error",
    {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "capIsNew": false,
      "capIsNewExceptions": [
        "Immutable.Map",
        "Immutable.Set",
        "Immutable.List"
      ]
    }
  ],
  "no-array-constructor": "error",
  "no-bitwise": "error",
  "no-continue": "error",
  "no-lonely-if": "error",
  "no-multi-assign": [
    "error"
  ],
  "no-nested-ternary": "error",
  "no-new-object": "error",
  "no-plusplus": "error",
  "no-restricted-syntax": [
    "error",
    {
      "selector": "ForInStatement",
      "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
    },
    {
      "selector": "ForOfStatement",
      "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
    },
    {
      "selector": "LabeledStatement",
      "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
    },
    {
      "selector": "WithStatement",
      "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
    }
  ],
  "no-underscore-dangle": [
    "error",
    {
      "allow": [],
      "allowAfterThis": false,
      "allowAfterSuper": false,
      "enforceInMethodNames": true
    }
  ],
  "no-unneeded-ternary": [
    "error",
    {
      "defaultAssignment": false
    }
  ],
  "one-var": [
    "error",
    "never"
  ],
  "operator-assignment": [
    "error",
    "always"
  ],
  "prefer-exponentiation-operator": "error",
  "prefer-object-spread": "error",
  "spaced-comment": [
    "error",
    "always",
    {
      "line": {
        "exceptions": [
          "-",
          "+"
        ],
        "markers": [
          "=",
          "!",
          "/"
        ]
      },
      "block": {
        "exceptions": [
          "-",
          "+"
        ],
        "markers": [
          "=",
          "!",
          ":",
          "::"
        ],
        "balanced": true
      }
    }
  ],
  "unicode-bom": [
    "error",
    "never"
  ],
};
