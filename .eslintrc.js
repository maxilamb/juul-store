module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'quotes': ['error', 'single', 'avoid-escape'],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,
    'max-len': ['error', 100, 2, { ignoreUrls: true, }],
    'no-console': 'error',
    'no-alert': 'error',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'prefer-destructuring': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',

    "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
    "jsx-a11y/label-has-for": [2, {
      "required": {
        "every": ["id"]
      }
    }],
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
