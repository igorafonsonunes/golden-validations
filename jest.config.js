module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/test/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    roots: ['<rootDir>/test'],
    testEnvironment: 'node',
    transform: { '.+\\.ts$': 'ts-jest' },
  };
  