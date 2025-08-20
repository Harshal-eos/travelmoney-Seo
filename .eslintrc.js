// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows modern ECMAScript features
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended', // Basic recommended rules
    'plugin:@typescript-eslint/recommended', // Recommended TS rules
    'next/core-web-vitals', // Next.js rules
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off', // Disable empty interface errors
    '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused vars instead of failing
  },
};
