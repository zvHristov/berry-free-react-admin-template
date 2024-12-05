/* eslint-disable */

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  "bail": 1,
  "verbose": true,
  testEnvironment: "jsdom",
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}, { prefix: '<rootDir>/' }),
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", 
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ['node_modules/(?!(@mui|@emotion))'],
  setupFilesAfterEnv: ['./src/setupTests.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.jsx',
    '!src/reportWebVitals.js',
    '!src/config.js',
    '!src/*.{.d.js,.test.js,.test.jsx,.spec.js,.spec.jsx}',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  }
};