const { build } = require('esbuild');
const glob = require('glob');

const def = {
  format: 'cjs',
  write: true,
  target: ['es2020'],
  platform: 'node',
  minify: true,
  tsconfig: 'tsconfig.json'
};

build(
  Object.assign(
    {
      entryPoints: glob('src/safe/**/*.ts', { sync: true }),
      outdir: 'dist/safe'
    },
    def
  )
);

build(
  Object.assign(
    {
      entryPoints: glob('src/unsafe/**/*.ts', { sync: true }),
      outdir: 'dist/unsafe'
    },
    def
  )
);
