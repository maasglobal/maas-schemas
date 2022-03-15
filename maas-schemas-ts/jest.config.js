module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: {
        ignoreCodes: [6133, 6196],
      },
    },
  },
  testMatch: ['**/*.doctest.ts', '**/__tests__/*.ts', '**/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  roots: ['.'],
  collectCoverage: true,
  collectCoverageFrom: ['src/_utils/**/*.ts', 'src/_private/**/*.ts'],
};
