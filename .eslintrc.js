module.exports = {
  ignorePatterns: ['commitlint.config.js'],
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'import/extensions': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'eol-last': ['error', 'always'],
    'no-debugger': 'error',
    'no-nested-ternary': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never'],
    curly: ['error', 'all'],
  },
}
