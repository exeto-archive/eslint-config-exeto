module.exports = {
  extends: [
    'eslint-config-exeto-base',
    'eslint-config-exeto-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
