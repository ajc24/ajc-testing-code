/**
 * Developed by Anthony Cox in 2023
 */
module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/tests/jest-config',
    '<rootDir>/tests/unit/coverage',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/jest-config/mocks/imageMock.js',
    '\\.(css|less)$': '<rootDir>/tests/jest-config/mocks/cssMock.js'
  },
  rootDir: '../../',
  setupFilesAfterEnv: [],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  testMatch: [
    '<rootDir>/tests/unit/**/*.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/tests/unit/coverage',
  ],
  verbose: true
};
