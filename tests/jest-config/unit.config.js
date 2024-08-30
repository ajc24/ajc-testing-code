/**
 * Developed by Anthony Cox in 2024
 */
const { configureUnitTests } = require('../../build');

const jestConfig = configureUnitTests();
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/index.js');
jestConfig.setupFilesAfterEnv.push('<rootDir>/tests/jest-config/document.config.js');

module.exports = jestConfig;
