module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/dist/**',
    '!**/__tests__/**',
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
    "**/__tests__/**/*.[jt]s?(x)",
  ],
};
