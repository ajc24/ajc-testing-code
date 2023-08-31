"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _configCommon = _interopRequireDefault(require("./config-common"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Developed by Anthony Cox in 2023
 */

/**
 * Sets the configuration for jest unit tests
 * @param {string} rootDirectory
 * @returns {JSON}
 */
var configureUnitTests = function configureUnitTests(rootDirectory) {
  var jestConfig = (0, _configCommon["default"])(rootDirectory);

  /* Set the coverage directory for the project */
  jestConfig.coverageDirectory = '<rootDir>/tests/unit/coverage';

  /* Set the directory to collect coverage from */
  jestConfig.collectCoverageFrom = [];
  jestConfig.collectCoverageFrom.push('<rootDir>/src/**/*.js');

  /* Set the ignored folder(s) for the coverage process - ignore the node_modules and jest_config folders by default */
  jestConfig.coveragePathIgnorePatterns = [];
  jestConfig.coveragePathIgnorePatterns.push('<rootDir>/node_modules');
  jestConfig.coveragePathIgnorePatterns.push('<rootDir>/tests/jest-config');
  jestConfig.coveragePathIgnorePatterns.push('<rootDir>/tests/unit/coverage');

  /* Set the path to the tests to be executed as part of the unit test suite */
  jestConfig.testMatch = [];
  jestConfig.testMatch.push('<rootDir>/tests/unit/**/*.js');

  /* Set the path to the tests to be ignored as part of the unit test suite */
  jestConfig.testPathIgnorePatterns = [];
  jestConfig.testPathIgnorePatterns.push('<rootDir>/tests/unit/coverage');
  return jestConfig;
};
var _default = configureUnitTests;
exports["default"] = _default;