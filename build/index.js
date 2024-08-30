"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
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