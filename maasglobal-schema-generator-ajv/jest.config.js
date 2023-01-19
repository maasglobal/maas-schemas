module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [6133, 6196],
      },
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  roots: ['src'],
};
