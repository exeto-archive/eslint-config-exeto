module.exports = {
  extends: require.resolve('eslint-config-airbnb/base'),
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    'func-names': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-shadow': [2, { 'allow': ['err', 'resolve', 'reject', 'cb'] }],
    'no-console': 0,
    'strict': [2, 'global'],
  },
};
