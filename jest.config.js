/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.ts"],
  modulePathIgnorePatterns: ["<rootDir>/__tests__/setup.ts"],

};