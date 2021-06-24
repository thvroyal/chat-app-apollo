module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react'],
  rules: {
    'no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/no-children-prop': 0,
  },
};
