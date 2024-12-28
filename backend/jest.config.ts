export default {
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  rootDir: "src",
  testRegex: "^((?!int|e2e).)*.(test|spec).ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  moduleNameMapper: {
    "@src/(.*)$": "<rootDir>/$1",
    "@movies/(.*)$": "<rootDir>/movies/$1",
  },
};
