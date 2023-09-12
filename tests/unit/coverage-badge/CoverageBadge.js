/**
 * Developed by Anthony Cox in 2023
 */
const lcov2badge = require('lcov2badge');
import fs from 'fs';
import testTypes from '../../../src/coverage-badge/coverage-data';
import CoverageBadge from '../../../src/coverage-badge/CoverageBadge';

describe('Coverage badge module', () => {
  /* Set the test data for the coverage badge options JSON */
  const optionsCustom_NoFileWrite = {
    koThreshold: 50,
    lcovInfoPath: `./tests/custom-suite/custom-coverage/lcov.info`,
    subject: 'custom coverage badge name',
    warnThreshold: 70,
  };
  const optionsCustom_WithFileWrite_CustomPath = {
    badgeOutputPath: '/my-test/path-to/output-the/badge-to',
  };
  const optionsCustom_WithFileWrite_TestTypeDefined = {
    testType: testTypes.accessibility,
  };
  const optionsDefault = {
    filePath: `./tests/${testTypes.unit}/coverage/lcov.info`,
    koColor: 'red',
    koThreshold: 60,
    okColor: 'brightgreen',
    subject: 'coverage',
    warnColor: 'orange',
    warnThreshold: 80,
  };

  describe('generate() functionality - Verify the default coverage badge option values', () => {
    let lcov2badgeSpy;
    let testOptions;

    beforeAll(() => {
      /* Set up the mocks for this module */
      lcov2badgeSpy = jest
        .spyOn(lcov2badge, 'badge')
        .mockImplementation(options => {
          testOptions = options;
        });
      /* Invoke the function being tested */
      CoverageBadge.generate();
    });

    afterAll(() => {
      lcov2badgeSpy.mockRestore();
    });

    it('verifies that the default file path value is set correctly', () => {
      expect(testOptions.filePath).toBe(optionsDefault.filePath);
    });

    it('verifies that the default danger colour value is set correctly', () => {
      expect(testOptions.koColor).toBe(optionsDefault.koColor);
    });

    it('verifies that the default danger threshold value is set correctly', () => {
      expect(testOptions.koThreshold).toBe(optionsDefault.koThreshold);
    });

    it('verifies that the default positive colour value is set correctly', () => {
      expect(testOptions.okColor).toBe(optionsDefault.okColor);
    });

    it('verifies that the default subject value is set correctly', () => {
      expect(testOptions.subject).toBe(optionsDefault.subject);
    });

    it('verifies that the default warning colour value is set correctly', () => {
      expect(testOptions.warnColor).toBe(optionsDefault.warnColor);
    });

    it('verifies that the default warning threshold value is set correctly', () => {
      expect(testOptions.warnThreshold).toBe(optionsDefault.warnThreshold);
    });
  });

  describe('generate() functionality - Verify custom set coverage badge option values', () => {
    let lcov2badgeSpy;
    let testOptions;

    beforeAll(() => {
      /* Set up the mocks for this module */
      lcov2badgeSpy = jest
        .spyOn(lcov2badge, 'badge')
        .mockImplementation(options => {
          testOptions = options;
        });
      /* Invoke the function being tested */
      CoverageBadge.generate(optionsCustom_NoFileWrite);
    });

    afterAll(() => {
      lcov2badgeSpy.mockRestore();
    });

    it('verifies that the custom file path value is set correctly', () => {
      expect(testOptions.filePath).toBe(optionsCustom_NoFileWrite.lcovInfoPath);
    });

    it('verifies that the custom danger threshold value is set correctly', () => {
      expect(testOptions.koThreshold).toBe(optionsCustom_NoFileWrite.koThreshold);
    });

    it('verifies that the custom subject value is set correctly', () => {
      expect(testOptions.subject).toBe(optionsCustom_NoFileWrite.subject);
    });

    it('verifies that the custom warning threshold value is set correctly', () => {
      expect(testOptions.warnThreshold).toBe(optionsCustom_NoFileWrite.warnThreshold);
    });
  });

  describe('generate() functionality - Verify an error is thrown on coverage badge data creation failure', () => {
    let lcov2badgeSpy;
    let testError;

    beforeAll(() => {
      /* Set up the mocks for this module */
      testError = new Error('test-failure');
      lcov2badgeSpy = jest
        .spyOn(lcov2badge, 'badge')
        .mockImplementation((options, callback) => {
          callback(testError, 'svg-badge-data');
        });
    });

    afterAll(() => {
      lcov2badgeSpy.mockRestore();
    });

    it('verifies that an error is thrown if the process to create the svg badge data has failed', () => {
      expect(() => CoverageBadge.generate(optionsCustom_NoFileWrite)).toThrow(testError);
    });
  });

  describe('generate() functionality - Verify the default coverage badge file output path and badge data', () => {
    let fsWriteFileSyncSpy;
    let lcov2badgeSpy;
    let testBadgeData;
    let testBadgeOutputPath;
    let testCoverageBadgeData;
    
    beforeAll(() => {
      /* Set up the mocks for this module */
      testBadgeData = 'svg-badge-data';
      fsWriteFileSyncSpy = jest
        .spyOn(fs, 'writeFileSync')
        .mockImplementation((badgeOutputPath, badgeData) => {
          testBadgeOutputPath = badgeOutputPath;
          testCoverageBadgeData = badgeData;
        });
      lcov2badgeSpy = jest
        .spyOn(lcov2badge, 'badge')
        .mockImplementation((options, callback) => {
          callback(undefined, testBadgeData);
        });
      /* Invoke the function being tested */
      CoverageBadge.generate(optionsCustom_NoFileWrite);
    });

    afterAll(() => {
      lcov2badgeSpy.mockRestore();
      fsWriteFileSyncSpy.mockRestore();
    });

    it('verifies that the default coverage badge file output path is set correctly', () => {
      expect(testBadgeOutputPath).toBe(`./docs/${testTypes.unit}-coverage-badge.svg`);
    });

    it('verifies that the coverage badge data is correctly supplied as a parameter to the write file proces', () => {
      expect(testCoverageBadgeData).toBe(testBadgeData);
    });
  });

  describe('generate() functionality - Verify the coverage badge file output path when a custom test type is specified', () => {
    let fsWriteFileSyncSpy;
    let lcov2badgeSpy;
    let testBadgeOutputPath;
    
    beforeAll(() => {
      /* Set up the mocks for this module */
      fsWriteFileSyncSpy = jest
        .spyOn(fs, 'writeFileSync')
        .mockImplementation((badgeOutputPath) => {
          testBadgeOutputPath = badgeOutputPath;
        });
      lcov2badgeSpy = jest
        .spyOn(lcov2badge, 'badge')
        .mockImplementation((options, callback) => {
          callback(undefined, 'svg-badge-data');
        });
      /* Invoke the function being tested */
      CoverageBadge.generate(optionsCustom_WithFileWrite_TestTypeDefined);
    });

    afterAll(() => {
      lcov2badgeSpy.mockRestore();
      fsWriteFileSyncSpy.mockRestore();
    });

    it('verifies that the default coverage badge file output path is set correctly', () => {
      expect(testBadgeOutputPath).toBe(`./docs/${optionsCustom_WithFileWrite_TestTypeDefined.testType}-coverage-badge.svg`);
    });
  });

  describe('generate() functionality - Verify the coverage badge file output path when a custom path is specified', () => {
    let fsWriteFileSyncSpy;
    let lcov2badgeSpy;
    let testBadgeOutputPath;
    
    beforeAll(() => {
      /* Set up the mocks for this module */
      fsWriteFileSyncSpy = jest
        .spyOn(fs, 'writeFileSync')
        .mockImplementation((badgeOutputPath) => {
          testBadgeOutputPath = badgeOutputPath;
        });
      lcov2badgeSpy = jest
        .spyOn(lcov2badge, 'badge')
        .mockImplementation((options, callback) => {
          callback(undefined, 'svg-badge-data');
        });
      /* Invoke the function being tested */
      CoverageBadge.generate(optionsCustom_WithFileWrite_CustomPath);
    });

    afterAll(() => {
      lcov2badgeSpy.mockRestore();
      fsWriteFileSyncSpy.mockRestore();
    });

    it('verifies that the default coverage badge file output path is set correctly', () => {
      expect(testBadgeOutputPath).toBe(optionsCustom_WithFileWrite_CustomPath.badgeOutputPath);
    });
  });
});