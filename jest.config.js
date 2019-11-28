module.exports = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['./jest.setup-after-env.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
};
