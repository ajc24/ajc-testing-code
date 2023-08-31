/**
 * Developed by Anthony Cox in 2023
 */

/**
 * Configures the most common settings for jest
 * @param {string} rootDirectory
 * @returns {JSON}
 */
const configureCommonJestSettings = rootDirectory => {
  return {
    moduleNameMapper: {
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/jest-config/mocks/imageMock.js',
      '\\.(css|less)$': '<rootDir>/tests/jest-config/mocks/cssMock.js'
    },
    rootDir: rootDirectory || '../../',
    setupFilesAfterEnv: [],
    testEnvironmentOptions: {
      url: 'http://localhost/',
    },
    verbose: true
  }
}
export default configureCommonJestSettings;
