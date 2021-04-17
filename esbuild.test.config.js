const def = {
  format: 'cjs',
  write: true,
  platform: 'node',
  minify: true,
  tsconfig: 'tsconfig.json'
};

require('esbuild').build(
  Object.assign(
    {
      entryPoints: require('glob')('src/tests/**/*.ts', { sync: true }),
      outdir: 'dist/tests'
    },
    def
  )
);
