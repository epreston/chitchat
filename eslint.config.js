import sharedConfig from '@epreston/eslint-config';

export default [
  ...sharedConfig,
  {
    rules: {
      'no-console': 'off',
      'prettier/prettier': 'off'
    }
  }
];
