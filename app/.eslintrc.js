module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      forOf: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandProperties: true,
      objectLiteralShorthandMethods: true,
      octalLiterals: true,
      binaryLiterals: true,
      templateStrings: true,
      generators: true,
      modules: false
    }
  },
  plugins: ['html', 'prettier'],
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    mocha: true,
    es6: true,
    node: true
  },
  // add global vars for chai, etc
  globals: {
    expect: false,
    chai: false,
    sinon: false,
    DS: false,
    FB: false,
    YT: false, // YouTube library
    googletag: false // GPT
  },
  rules: {
    // possible errors
    'valid-jsdoc': [
      1,
      {
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ],
    // best practices
    complexity: 0, // Reconsider this in the future
    'default-case': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-floating-decimal': 1,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-void': 2,
    'quote-props': [2, 'as-needed'],
    'vars-on-top': 2,
    'wrap-iife': 2,
    // strict mode
    strict: [2, 'global'],
    // variables
    'no-unused-vars': 2,
    'no-undef': 2,
    // node.js
    'handle-callback-err': [2, '^.*(e|E)rr'],
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 2,
    // stylistic issues
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-style': [2, 'last'],
    'comma-dangle': [2, 'never'],
    'eol-last': [2, 'always'],
    'max-nested-callbacks': [2, 5],
    'newline-after-var': [2, 'always'],
    'no-nested-ternary': 2,
    'no-spaced-func': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    'one-var': 2,
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'always'],
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-infix-ops': [
      1,
      {
        int32Hint: false
      }
    ],
    'spaced-comment': [2, 'always'],
    // es6
    'generator-star-spacing': [2, 'before'],
    // legacy jshint rules
    'max-depth': [2, 4],
    'max-params': [2, 4]
  }
};