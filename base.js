module.exports = {
  extends: [
    'eslint-config-airbnb/base',
  ].map(require.resolve),
  rules: {
    'func-names': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-shadow': [2, { 'allow': ['err', 'resolve', 'reject', 'done', 'cb'] }],
  },
};
