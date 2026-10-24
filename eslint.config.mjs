import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['app.js'],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      ...js.configs.recommended.rules,
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
    },
  },
];