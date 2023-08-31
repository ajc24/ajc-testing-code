/**
 * Developed by Anthony Cox in 2023
 */
import configureCommonJestSettings from '../../../src/config/config-common';
import jestUnitTestConfig from '../../jest-config/unit.config';

describe('Common Jest Configuration', () => {
  /* Test data */
  const moduleNameMapperCssMock = '\\.(css|less)$';
  const moduleNameMapperImageMock = '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';
  
  describe('configureCommonJestSettings() method behaviour - Default root directory', () => {
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

  // describe('configureUnitTests() method behaviour - Custom root directory specified', () => {
  //   let jestConfig;

  //   beforeAll(() => {
  //     jestConfig = configureUnitTests('my/project/root/directory');
  //   });

  //   it('verifies that the root directory location property is set correctly', () => {
  //     expect(jestConfig.rootDir).toBe('my/project/root/directory');
  //   });
  // });

  // describe('configureSnapshotTests() method behaviour - Default root directory', () => {
  //   let jestConfig;

  //   beforeAll(() => {
  //     jestConfig = configureSnapshotTests();
  //   });

  //   it('verifies that the image mock file location property is set correctly', () => {
  //     const fileLocation = jestConfig.moduleNameMapper['\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'];
  //     expect(fileLocation).toBe(expectedImageMockFileLocation);
  //   });

  //   it('verifies that the css mock file location property is set correctly', () => {
  //     const fileLocation = jestConfig.moduleNameMapper['\\.(css|less)$'];
  //     expect(fileLocation).toBe(expectedCssMockFileLocation);
  //   });

  //   it('verifies that the root directory location property is set correctly', () => {
  //     expect(jestConfig.rootDir).toBe(expectedDefaultRootDirectoryLocation);
  //   });

  //   it('verifies that the list of setup files after environment property is defined', () => {
  //     expect(jestConfig.setupFilesAfterEnv).toBeDefined();
  //   });

  //   it('verifies that the list of setup files after environment property is initialised as an empty array', () => {
  //     expect(jestConfig.setupFilesAfterEnv.length).toBe(0);
  //   });

  //   it('verifies that the test environment options property is set defined', () => {
  //     expect(jestConfig.testEnvironmentOptions).toBeDefined();
  //   });

  //   it('verifies that the URL is set to the test environment options property', () => {
  //     expect(jestConfig.testEnvironmentOptions.url).toBe(expectedTestEnvironmentOptionsURL);
  //   });

  //   it('verifies that the verbose property is set correctly', () => {
  //     expect(jestConfig.verbose).toBeTruthy();
  //   });

  //   it('verifies that the coverage directory property is not defined', () => {
  //     expect(jestConfig.coverageDirectory).toBeUndefined();
  //   });

  //   it('verifies that the list of coverage path ignore patterns property is not defined', () => {
  //     expect(jestConfig.coveragePathIgnorePatterns).toBeUndefined();
  //   });

  //   it('verifies that the test match property is defined', () => {
  //     expect(jestConfig.testMatch).toBeDefined();
  //   });

  //   it('verifies that the test match property is initialised with a single file location', () => {
  //     expect(jestConfig.testMatch.length).toBe(1);
  //   });

  //   it('verifies that the test match file location property is set correctly', () => {
  //     expect(jestConfig.testMatch[0]).toBe('<rootDir>/tests/snapshots/**/*.js');
  //   });

  //   it('verifies that the test path ignore patterns property is not defined', () => {
  //     expect(jestConfig.testPathIgnorePatterns).toBeUndefined();
  //   });
  // });

  // describe('configureSnapshotTests() method behaviour - Custom root directory specified', () => {
  //   let jestConfig;

  //   beforeAll(() => {
  //     jestConfig = configureSnapshotTests('my/project/root/directory');
  //   });

  //   it('verifies that the root directory location property is set correctly', () => {
  //     expect(jestConfig.rootDir).toBe('my/project/root/directory');
  //   });
  // });
});