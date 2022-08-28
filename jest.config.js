const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
        '@config/(.*)': '<rootDir>/src/config/$1',
        '@utils/(.*)': '<rootDir>/utils/$1',
        '@controllers/(.*)': '<rootDir>/src/controllers/$1',
        '@repositories/(.*)': '<rootDir>/src/repositories/$1',
        '@localtypes/(.*)': '<rootDir>/src/types/$1',
        '@entities/(.*)': '<rootDir>/src/entities/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
        '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
        '@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    },
};