module.exports = {
  roots: ['<rootDir>/tests'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/tests'],
  verbose: true,
};
