/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    'index.ts'
  ],
  moduleNameMapper: {
    '@application(.*)': '<rootDir>src/application$1',
    '@domain(.*)': '<rootDir>src/domain$1',
    '@infrastructure(.*)': '<rootDir>src/infrastructure$1',
    '@interface(.*)': '<rootDir>src/interface$1'
  }
};