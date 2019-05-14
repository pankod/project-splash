const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  "preset": "react-native",
  "testRegex": "(/__tests__/.*| (\\.| /)(test|spec))\\.(ts?|tsx?)$",
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "roots": [
    "<rootDir>"
  ],
  "modulePathIgnorePatterns": ["<rootDir>/ExampleApp"],
  "globals": {
    "ts-jest": {
      "tsConfig": "./tsconfig.json"
    }
  },
  "moduleNameMapper": {
    '^@([A-Z].*)$': '<rootDir>/src/$1'
  },
  "modulePaths": [
    "<rootDir>"
  ],
  "testEnvironment": "jsdom",
  "setupFiles": [
    "./setupTests.js"
  ]
};
