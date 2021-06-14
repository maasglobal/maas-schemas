module.exports = {
  "extends": [
    "eslint-config-maasglobal-ts"
  ],
  rules: {
    'simple-import-sort/sort': [
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
      },
    },
    {
      files: ['src/**/*'],
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
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/ban-types': 0,
        'import/no-default-export': 0,
        'fp/no-class': 0,
        'fp/no-this': 0,
        '@typescript-eslint/consistent-type-definitions': 0,
        'simple-import-sort/sort': 0,
      },
    },
  ],
};
