/* eslint-disable @typescript-eslint/no-var-requires */

const def = {
  format: 'cjs',
  write: true,
  target: 'node14',
  platform: 'node',
  minify: true,
  tsconfig: 'tsconfig.json',
  bundle: true,
};

require('esbuild').build(
  Object.assign(
    {
      entryPoints: require('glob')('src/tests/**/*.ts', { sync: true }),
      outdir: 'dist/tests',
    },
    def,
  ),
);
