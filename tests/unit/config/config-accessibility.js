/**
 * Developed by Anthony Cox in 2023
 */
import configureAccessibilityTests from '../../../src/config/config-accessibility';

describe('Code based accessibility testing configuration', () => {
  /* Test data */
  const customRootDirectory = 'my/project/root/directory';
  const defaultRootDirectory = '../../';
  const maxConcurrency = 1;
  const setupFilesAfterEnv = [
    '<rootDir>/tests/jest-config/document.config.js',
  ];
  const testMatch = [
    '<rootDir>/tests/accessibility/**/*.js',
  ];
  
  describe('configureAccessibilityTests() functionality - Default root directory', () => {
    let jestConfig;

    beforeAll(() => {
      jestConfig = configureAccessibilityTests();
    });

    it('verifies that the root directory location property is set correctly', () => {
      expect(jestConfig.rootDir).toBe(defaultRootDirectory);
    });

    it('verifies that the max concurrency property is correctly set for sequential test execution', () => {
      expect(jestConfig.maxConcurrency).toBe(maxConcurrency);
    });

    it('verifies that the list of setup files after environment property is defined', () => {
      expect(jestConfig.setupFilesAfterEnv).toBeDefined();
    });

    it('verifies that the list of setup files after environment property is initialised with a single file location', () => {
      expect(jestConfig.setupFilesAfterEnv.length).toBe(setupFilesAfterEnv.length);
    });

    it('verifies that the setup files after environment file location property includes the path to the document configuration', () => {
      expect(jestConfig.setupFilesAfterEnv[0]).toBe(setupFilesAfterEnv[0]);
    });

    it('verifies that the test match property is defined', () => {
      expect(jestConfig.testMatch).toBeDefined();
    });

    it('verifies that the test match property is initialised with a single file location', () => {
      expect(jestConfig.testMatch.length).toBe(testMatch.length);
    });

    it('verifies that the test match file location property is set correctly', () => {
      expect(jestConfig.testMatch[0]).toBe(testMatch[0]);
    });
  });

  describe('configureAccessibilityTests() functionality - Custom root directory', () => {
    let jestConfig;

    beforeAll(() => {
      jestConfig = configureAccessibilityTests(customRootDirectory);
    });

    it('verifies that the root directory location property is set correctly', () => {
      expect(jestConfig.rootDir).toBe(customRootDirectory);
    });
  });
});
