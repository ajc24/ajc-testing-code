"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _fs = _interopRequireDefault(require("fs"));
var _coverageData = _interopRequireDefault(require("./coverage-data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Developed by Anthony Cox in 2023
 */
var lcov2badge = require('lcov2badge');
var CoverageBadge = /*#__PURE__*/function () {
  function CoverageBadge() {
    _classCallCheck(this, CoverageBadge);
  }
  _createClass(CoverageBadge, null, [{
    key: "generate",
    value:
    /**
     * Generates the coverage badge
     * @param {{ badgeOutputPath: string, koThreshold: number, lcovInfoPath: string, subject: string, testType: string, warnThreshold: number }} testData 
     */
    function generate(testData) {
      /* Determine the current test type being processed */
      var testType = testData.testType || _coverageData["default"].unit;

      /* Determine the file path for the lcov info file */
      var customLcovInfoPath;
      if (testData.lcovInfoPath !== undefined) {
        customLcovInfoPath = testData.lcovInfoPath;
      } else {
        customLcovInfoPath = "./tests/".concat(testType, "/coverage/lcov.info");
      }

      /* Determine the file path to which the SVG badge is to be output to */
      var customBadgeOutputPath;
      if (testData.badgeOutputPath !== undefined) {
        customBadgeOutputPath = testData.badgeOutputPath;
      } else {
        customBadgeOutputPath = "./docs/".concat(testType, "-coverage-badge.svg");
      }
      /* Generate the list of options data for the coverage badge generation process */
      var options = {
        filePath: customLcovInfoPath,
        koColor: 'red',
        koThreshold: testData.koThreshold || 60,
        okColor: 'brightgreen',
        subject: testData.subject || 'coverage',
        warnColor: 'orange',
        warnThreshold: testData.warnThreshold || 80
      };
      /* Generate the coverage badge */
      lcov2badge.badge(options, function (error, svgBadge) {
        if (error) {
          throw error;
        }
        /* Write the coverage badge file */
        _fs["default"].writeFileSync(customBadgeOutputPath, svgBadge);
      });
    }
  }]);
  return CoverageBadge;
}();
exports["default"] = CoverageBadge;