module.exports = {
  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  globals: {
    __suppressErrorConsole__: true,
    'ts-jest': {
        tsConfigFile: './tsconfig.jest.json',
        enableTsDiagnostics: false,
    },
  },
  testPathIgnorePatterns: ['/dist'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'txt'],
};