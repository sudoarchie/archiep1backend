import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Files to lint
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest', // ES2020 or later
        sourceType: 'module', // Set module type
        project: './tsconfig.json', // Specify your TypeScript config
      },
      globals: globals.browser, // Add browser globals
    },
    plugins: {
      '@typescript-eslint': tseslint, // TypeScript ESLint plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // JavaScript recommended rules
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
    },
  },
];
