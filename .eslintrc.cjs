module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'eol-last': ['error', 'always'],
    // suppress errors for missing 'import React' in files:
    'react/react-in-jsx-scope': 'off',
    // Prop-types not needed with TSX:
    'react/prop-types': 'off',
    // Disallow console logs:
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    // Disallow multiple empty lines:
    'no-multiple-empty-lines': ['error', { max: 1 }],
    // Automate import sorting:
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Allow casting to boolean:
    'no-extra-boolean-cast': 'off',
    // Disabling until we can generate API typings:
    '@typescript-eslint/no-explicit-any': 'off',
    // We don't really care about using newer module imports:
    '@typescript-eslint/no-var-requires': 'off',
    // Allow prefixing unused vars with underscore:
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    // Overly opinionated rule:
    'prefer-rest-params': 'off',
    'no-html-link-for-pages': 'off',
    'no-html-link-for-pages': 'off',
    // Do not allow duplicate imports
    'no-duplicate-imports': 'error',
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      { semi: false, singleQuote: true },
    ],
  },
};
