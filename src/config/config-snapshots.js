/**
 * Developed by Anthony Cox in 2023
 */
import configureCommonJestSettings from './config-common';

/**
 * Sets the configuration for jest snapshot tests
 * @param {string} rootDirectory
 * @returns {JSON}
 */
const configureSnapshotTests = rootDirectory => {
  const jestConfig = configureCommonJestSettings(rootDirectory);

  /* Set the path to the tests to be executed as part of the snapshots test suite */
  jestConfig.testMatch = [];
  jestConfig.testMatch.push('<rootDir>/tests/snapshots/**/*.js');

  return jestConfig;
}
export default configureSnapshotTests;
