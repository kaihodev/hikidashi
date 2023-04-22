import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

import type { Config } from '@jest/types';

// eslint-disable-next-line require-await
export default async (): Promise<Config.InitialOptions> => ({
  coverageProvider: 'v8',
  maxConcurrency: 6,
  maxWorkers: 6,
  displayName: 'hikidashi unit tests',
  preset: 'ts-jest',
  transform: {
    '((?:un)?safe|index)\\.js?$': '<rootDir>/tests/built.transform.js',
  },
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/**/*.test.*'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tests/tsconfig.json',
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
});
