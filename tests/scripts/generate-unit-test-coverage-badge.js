/**
 * Developed by Anthony Cox in 2023
 */
const { CoverageBadge, testTypes } = require('../../build');
CoverageBadge.generate({ subject: 'Unit Test Code Coverage', testType: testTypes.unit });
