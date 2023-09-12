/**
 * Developed by Anthony Cox in 2023
 */
import configureCommonJestSettings from '../../../src/config/config-common';
import jestUnitTestConfig from '../../jest-config/unit.config';

describe('Common jest configuration', () => {
  /* Test data */
  const moduleNameMapperCssMock = '\\.(css|less)$';
  const moduleNameMapperImageMock = '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';
  
  describe('configureCommonJestSettings() functionality - Default root directory', () => {
    let jestConfig;

    beforeAll(() => {
      jestConfig = configureCommonJestSettings();
    });

    it('verifies that the image mock file location property is set correctly', () => {
      const fileLocation = jestConfig.moduleNameMapper[`${moduleNameMapperImageMock}`];
      expect(fileLocation).toBe(jestUnitTestConfig.moduleNameMapper[`${moduleNameMapperImageMock}`]);
    });

    it('verifies that the css mock file location property is set correctly', () => {
      const fileLocation = jestConfig.moduleNameMapper[`${moduleNameMapperCssMock}`];
      expect(fileLocation).toBe(jestUnitTestConfig.moduleNameMapper[`${moduleNameMapperCssMock}`]);
    });

    it('verifies that the root directory location property is set correctly', () => {
      expect(jestConfig.rootDir).toBe(jestUnitTestConfig.rootDir);
    });

    it('verifies that the list of setup files after environment property is defined', () => {
      expect(jestConfig.setupFilesAfterEnv).toBeDefined();
    });

    it('verifies that the list of setup files after environment property is initialised as an empty array', () => {
      expect(jestConfig.setupFilesAfterEnv.length).toBe(0);
    });

    it('verifies that the test environment options property is set defined', () => {
      expect(jestConfig.testEnvironmentOptions).toBeDefined();
    });

    it('verifies that the URL is set to the test environment options property', () => {
      expect(jestConfig.testEnvironmentOptions.url).toBe(jestUnitTestConfig.testEnvironmentOptions.url);
    });

    it('verifies that the verbose property is set correctly', () => {
      expect(jestConfig.verbose).toBeTruthy();
    });
  });

  describe('configureCommonJestSettings() functionality - Custom root directory', () => {
    let jestConfig;
    const testRootDirectory = '/my-project-root-directory';

    beforeAll(() => {
      jestConfig = configureCommonJestSettings(testRootDirectory);
    });

    it('verifies that the root directory location property is set correctly', () => {
      expect(jestConfig.rootDir).toBe(testRootDirectory);
    });
  });
});
