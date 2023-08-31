"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * Developed by Anthony Cox in 2023
 */

/**
 * Configures the most common settings for jest
 * @param {string} rootDirectory
 * @returns {JSON}
 */
var configureCommonJestSettings = function configureCommonJestSettings(rootDirectory) {
  return {
    moduleNameMapper: {
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/jest-config/mocks/imageMock.js',
      '\\.(css|less)$': '<rootDir>/tests/jest-config/mocks/cssMock.js'
    },
    rootDir: rootDirectory || '../../',
    setupFilesAfterEnv: [],
    testEnvironmentOptions: {
      url: 'http://localhost/'
    },
    verbose: true
  };
};
var _default = configureCommonJestSettings;
exports["default"] = _default;