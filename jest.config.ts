import type { Config } from '@jest/types';

// eslint-disable-next-line require-await
export default async (): Promise<Config.InitialOptions> => ({
  coverageProvider: 'v8',
  displayName: 'unit test',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/src/tests/**/*.test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
});
