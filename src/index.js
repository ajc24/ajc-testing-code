/**
 * Developed by Anthony Cox in 2023
 */
import AccessibilityTestDev from './test-development/AccessibilityTestDev';
import configureAccessibilityTests from './config/config-accessibility';
import configureSnapshotTests from './config/config-snapshots';
import configureUnitTests from './config/config-unit';
import CoverageBadge from './coverage-badge/CoverageBadge';
import SnapshotTestDev from './test-development/SnapshotTestDev';
import testTypes from './coverage-badge/coverage-data';

export {
  AccessibilityTestDev,
  configureAccessibilityTests,
  configureSnapshotTests,
  configureUnitTests,
  CoverageBadge,
  SnapshotTestDev,
  testTypes,
};
