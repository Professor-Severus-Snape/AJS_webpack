module.exports = {
  env: {
    browser: true,
    node: true,
    es2023: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'no-console': 'off',
    'no-unused-vars': 'off', // временное отключение правил
    'max-classes-per-file': 'off', // временное отключение правил
    'class-methods-use-this': 'off', // временное отключение правил
  },
};
