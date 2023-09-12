/**
 * Developed by Anthony Cox in 2023
 */
const lcov2badge = require('lcov2badge');
import fs from 'fs';
import testTypes from './coverage-data';

/**
 * Coverage badge generation module
 */
export default class CoverageBadge {
  /**
   * Generates the coverage badge
   * @param {{ badgeOutputPath: string, koThreshold: number, lcovInfoPath: string, subject: string, testType: string, warnThreshold: number }} testData 
   */
  static generate(testData = {}) {
    /* Determine the current test type being processed */
    const testType = testData.testType || testTypes.unit;
    
    /* Determine the file path for the lcov info file */
    let customLcovInfoPath;
    if (testData.lcovInfoPath !== undefined) {
      customLcovInfoPath = testData.lcovInfoPath;
    } else {
      customLcovInfoPath = `./tests/${testType}/coverage/lcov.info`;
    }
    
    /* Determine the file path to which the SVG badge is to be output to */
    let customBadgeOutputPath;
    if (testData.badgeOutputPath !== undefined) {
      customBadgeOutputPath = testData.badgeOutputPath;
    } else {
      customBadgeOutputPath = `./docs/${testType}-coverage-badge.svg`;
    }
    /* Generate the list of options data for the coverage badge generation process */
    const options = {
      filePath: customLcovInfoPath,
      koColor: 'red',
      koThreshold: testData.koThreshold || 60,
      okColor: 'brightgreen',
      subject: testData.subject || 'coverage',
      warnColor: 'orange',
      warnThreshold: testData.warnThreshold || 80,
    };
    /* Generate the coverage badge */
    lcov2badge.badge(options, function (error, svgBadge) {
      if (error) {
        throw error;
      }
      /* Write the coverage badge file */
      fs.writeFileSync(customBadgeOutputPath, svgBadge);
    });
  }
}
