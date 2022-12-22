module.exports = {
  "extends": [
    "maasglobal-ts/strict",
  ],
  rules: {
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          ['^\\u0000'],
          ['^maasglobal-prelude'],
          ['^[^.]'],
          ['^\\.'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['test/**/*', '**/__tests__/**/*'],
      env: {
        jest: true,
      },
      rules: {
        'fp/no-throw': 0,
        '@typescript-eslint/naming-convention': 0,
      },
    },
    {
      files: ['src/_types/**/*'],
      plugins: ['@typescript-eslint/tslint'],
      rules: {
        '@typescript-eslint/tslint/config': [2, {
          'rules': {
            'no-circular-imports': true,
          },
          'rulesDirectory': [
            'node_modules/tslint-no-circular-imports',
          ]
        }],
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/prefer-as-const': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/ban-types': 0,
        'import/no-default-export': 0,
        'fp/no-class': 0,
        'fp/no-this': 0,
      },
    },
  ],
};
