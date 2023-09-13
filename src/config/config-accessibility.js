/**
 * Developed by Anthony Cox in 2023
 */
import configureCommonJestSettings from './config-common';

/**
 * Sets the configuration for jest accessibility tests
 * @param {string} rootDirectory
 * @returns {JSON}
 */
const configureAccessibilityTests = rootDirectory => {
  const jestConfig = configureCommonJestSettings(rootDirectory);
  
  /* Ensure that all tests are run sequentially as opposed to in parallel */
  jestConfig.maxConcurrency = 1;

  /* Set the path to the document configuration required for jest-axe tests */
  jestConfig.setupFilesAfterEnv.push('<rootDir>/tests/jest-config/document.config.js');

  /* Set the path to the tests to be executed as part of the snapshots test suite */
  jestConfig.testMatch = [];
  jestConfig.testMatch.push('<rootDir>/tests/accessibility/**/*.js');

  return jestConfig;
}
export default configureAccessibilityTests;
