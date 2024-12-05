/* eslint-disable */

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}, { prefix: '<rootDir>/' }),
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", 
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
};