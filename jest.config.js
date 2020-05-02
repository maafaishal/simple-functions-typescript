module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/dist/**',
    '!**/test/**',
    '!**/coverage/**',
    '!**/babel.config.js',
    '!**/jest.config.js',
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
  ],
  testEnvironment: "node",
  testMatch: [
    "**/test/**/*.[jt]s?(x)",
  ],
};
