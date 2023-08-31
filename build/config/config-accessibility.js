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
 * Sets the configuration for jest accessibility tests
 * @param {string} rootDirectory
 * @returns {JSON}
 */
var configureAccessibilityTests = function configureAccessibilityTests(rootDirectory) {
  var jestConfig = (0, _configCommon["default"])(rootDirectory);

  /* Ensure that all tests are run sequentially as opposed to in parallel */
  jestConfig.maxConcurrency = 1;

  /* Set the path to the document configuration required for jest-axe tests */
  jestConfig.setupFilesAfterEnv.push('<rootDir>/tests/jest-config/document.config.js');

  /* Set the path to the tests to be executed as part of the snapshots test suite */
  jestConfig.testMatch = [];
  jestConfig.testMatch.push('<rootDir>/tests/accessibility/**/*.js');
  return jestConfig;
};
var _default = configureAccessibilityTests;
exports["default"] = _default;