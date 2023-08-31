"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AccessibilityTestDev", {
  enumerable: true,
  get: function get() {
    return _AccessibilityTestDev["default"];
  }
});
Object.defineProperty(exports, "CoverageBadge", {
  enumerable: true,
  get: function get() {
    return _CoverageBadge["default"];
  }
});
Object.defineProperty(exports, "SnapshotTestDev", {
  enumerable: true,
  get: function get() {
    return _SnapshotTestDev["default"];
  }
});
Object.defineProperty(exports, "configureAccessibilityTests", {
  enumerable: true,
  get: function get() {
    return _configAccessibility["default"];
  }
});
Object.defineProperty(exports, "configureSnapshotTests", {
  enumerable: true,
  get: function get() {
    return _configSnapshots["default"];
  }
});
Object.defineProperty(exports, "configureUnitTests", {
  enumerable: true,
  get: function get() {
    return _configUnit["default"];
  }
});
Object.defineProperty(exports, "testTypes", {
  enumerable: true,
  get: function get() {
    return _coverageData["default"];
  }
});
var _AccessibilityTestDev = _interopRequireDefault(require("./test-development/AccessibilityTestDev"));
var _configAccessibility = _interopRequireDefault(require("./config/config-accessibility"));
var _configSnapshots = _interopRequireDefault(require("./config/config-snapshots"));
var _configUnit = _interopRequireDefault(require("./config/config-unit"));
var _CoverageBadge = _interopRequireDefault(require("./coverage-badge/CoverageBadge"));
var _SnapshotTestDev = _interopRequireDefault(require("./test-development/SnapshotTestDev"));
var _coverageData = _interopRequireDefault(require("./coverage-badge/coverage-data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }