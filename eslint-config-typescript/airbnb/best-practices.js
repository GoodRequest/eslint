module.exports = {
  "array-callback-return": [
    "error",
    {
      "allowImplicit": true
    }
  ],
  "block-scoped-var": "error",
  "class-methods-use-this": [
    "error",
    {
      "exceptMethods": []
    }
  ],
  "consistent-return": "error",
  "default-case": [
    "error",
    {
      "commentPattern": "^no default$"
    }
  ],
  "default-case-last": "error",
  "default-param-last": "error",
  "dot-notation": [
    "error",
    {
      "allowKeywords": true
    }
  ],
  "eqeqeq": [
    "error",
    "always",
    {
      "null": "ignore"
    }
  ],
  "grouped-accessor-pairs": "error",
  "guard-for-in": "error",
  "max-classes-per-file": [
    "error",
    1
  ],
  "no-alert": "warn",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-constructor-return": "error",
  "no-else-return": [
    "error",
    {
      "allowElseIf": false
    }
  ],
  "no-empty-function": [
    "error",
    {
      "allow": [
        "arrowFunctions",
        "functions",
        "methods"
      ]
    }
  ],
  "no-empty-pattern": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-fallthrough": "error",
  "no-global-assign": [
    "error",
    {
      "exceptions": []
    }
  ],
  "no-implied-eval": "error",
  "no-iterator": "error",
  "no-labels": [
    "error",
    {
      "allowLoop": false,
      "allowSwitch": false
    }
  ],
  "no-lone-blocks": "error",
  "no-loop-func": "error",
  "no-multi-str": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": [
    "error",
    {
      "props": true,
      "ignorePropertyModificationsFor": [
        "acc",
        "accumulator",
        "e",
        "ctx",
        "context",
        "req",
        "request",
        "res",
        "response",
        "$scope",
        "staticContext"
      ]
    }
  ],
  "no-proto": "error",
  "no-redeclare": "error",
  "no-restricted-properties": [
    "error",
    {
      "object": "arguments",
      "property": "callee",
      "message": "arguments.callee is deprecated"
    },
    {
      "object": "global",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    },
    {
      "object": "self",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    },
    {
      "object": "window",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    },
    {
      "object": "global",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    },
    {
      "object": "self",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    },
    {
      "object": "window",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    },
    {
      "property": "__defineGetter__",
      "message": "Please use Object.defineProperty instead."
    },
    {
      "property": "__defineSetter__",
      "message": "Please use Object.defineProperty instead."
    },
    {
      "object": "Math",
      "property": "pow",
      "message": "Use the exponentiation operator (**) instead."
    }
  ],
  "no-return-assign": [
    "error",
    "always"
  ],
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-assign": [
    "error",
    {
      "props": true
    }
  ],
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-unused-expressions": [
    "error",
    {
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false
    }
  ],
  "no-unused-labels": "error",
  "no-useless-catch": "error",
  "no-useless-concat": "error",
  "no-useless-escape": "error",
  "no-useless-return": "error",
  "no-void": "error",
  "no-with": "error",
  "prefer-promise-reject-errors": [
    "error",
    {
      "allowEmptyReject": true
    }
  ],
  "prefer-regex-literals": [
    "error",
    {
      "disallowRedundantWrapping": true
    }
  ],
  "radix": "error",
  "vars-on-top": "error",
  "yoda": "error",
};
