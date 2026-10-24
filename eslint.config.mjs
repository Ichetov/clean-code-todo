import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['app.js'],

    ...js.configs.recommended,

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
    },
  },
];