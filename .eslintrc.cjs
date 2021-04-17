module.exports = {
  extends: [
    'eslint-config-strict/default.js',
    'plugin:@typescript-eslint/recommended',
  ],
  env: { browser: true, es2021: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    { files: ['**/unsafe/*.ts'], rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    } },
    { files: ['esbuild*.js'], rules: {
      '@typescript-eslint/no-var-requires': 'off',
    } },
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],
    'valid-jsdoc': 'off',
  },
};
