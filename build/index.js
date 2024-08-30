"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TestDev", {
  enumerable: true,
  get: function get() {
    return _TestDev["default"];
  }
});
Object.defineProperty(exports, "configureAccessibilityTests", {
  enumerable: true,
  get: function get() {
    return _config.configureAccessibilityTests;
  }
});
Object.defineProperty(exports, "configureSnapshotTests", {
  enumerable: true,
  get: function get() {
    return _config.configureSnapshotTests;
  }
});
Object.defineProperty(exports, "configureUnitTests", {
  enumerable: true,
  get: function get() {
    return _config.configureUnitTests;
  }
});
var _config = require("./config/config");
var _TestDev = _interopRequireDefault(require("./test-development/TestDev"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }