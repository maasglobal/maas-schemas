module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: {
        ignoreCodes: [6133, 6196],
      },
    },
  },
  testMatch: ['**/*.doctest.ts'],
  moduleNameMapper: {
    'maas-schemas-ts/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  roots: ['.'],
};
