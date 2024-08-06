import sharedConfig from '@epreston/eslint-config';

/** @type { import('eslint').Linter.Config[] } */
export default [
  ...sharedConfig,
  {
    name: 'project/rules',
    rules: {
      'no-console': 'off',
      'prettier/prettier': 'off'
    }
  }
];
