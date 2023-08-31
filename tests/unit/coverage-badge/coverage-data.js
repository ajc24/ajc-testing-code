/**
 * Developed by Anthony Cox in 2023
 */
import testTypes from '../../../src/coverage-badge/coverage-data';

describe('Coverage Badge Data Test Types', () => {
  it('verifies that the accessibility test type is defined', () => {
    expect(testTypes.accessibility).toBeDefined();
  });

  it('verifies that the accessibility test type has the expected value', () => {
    expect(testTypes.accessibility).toBe('accessibility');
  });

  it('verifies that the integration test type is defined', () => {
    expect(testTypes.integration).toBeDefined();
  });

  it('verifies that the integration test type has the expected value', () => {
    expect(testTypes.integration).toBe('integration');
  });

  it('verifies that unit test type is defined', () => {
    expect(testTypes.unit).toBeDefined();
  });

  it('verifies that the unit test type has the expected value', () => {
    expect(testTypes.unit).toBe('unit');
  });
});
