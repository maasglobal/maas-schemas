module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [6133, 6196],
      },
    },
  },
  testMatch: ['**/*.test.ts', '**/*.doctest.ts', '**/__tests__/*.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  roots: ['src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/io-ts/_utils/**/*.ts', 'src/io-ts/_private/**/*.ts'],
};
