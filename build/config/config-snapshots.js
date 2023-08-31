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
 * Sets the configuration for jest snapshot tests
 * @param {string} rootDirectory
 * @returns {JSON}
 */
var configureSnapshotTests = function configureSnapshotTests(rootDirectory) {
  var jestConfig = (0, _configCommon["default"])(rootDirectory);

  /* Set the path to the tests to be executed as part of the snapshots test suite */
  jestConfig.testMatch = [];
  jestConfig.testMatch.push('<rootDir>/tests/snapshots/**/*.js');
  return jestConfig;
};
var _default = configureSnapshotTests;
exports["default"] = _default;