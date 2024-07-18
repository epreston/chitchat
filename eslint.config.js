import sharedConfig from '@epreston/eslint-config';

/** @type { import('eslint').Linter.FlatConfig[] } */
export default [
  ...sharedConfig,
  {
    rules: {
      'no-console': 'off',
      'prettier/prettier': 'off'
    }
  }
];
