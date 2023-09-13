/**
 * Developed by Anthony Cox in 2023
 */
import configureSnapshotTests from '../../../src/config/config-snapshots';

describe('Snapshots testing configuration', () => {
  /* Test data */
  const customRootDirectory = 'my/project/root/directory';
  const defaultRootDirectory = '../../';
  const testMatch = [
    '<rootDir>/tests/snapshots/**/*.js',
  ];
  
  describe('configureSnapshotTests() functionality - Default root directory', () => {
    let jestConfig;

    beforeAll(() => {
      jestConfig = configureSnapshotTests();
    });

    it('verifies that the root directory location property is set correctly', () => {
      expect(jestConfig.rootDir).toBe(defaultRootDirectory);
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

  describe('configureSnapshotTests() functionality - Custom root directory', () => {
    let jestConfig;

    beforeAll(() => {
      jestConfig = configureSnapshotTests(customRootDirectory);
    });

    it('verifies that the root directory location property is set correctly', () => {
      expect(jestConfig.rootDir).toBe(customRootDirectory);
    });
  });
});
