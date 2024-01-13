module.exports = {
  root: true,
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'prettier', 'json'],
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
};
