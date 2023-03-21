import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/utils/utils.ts'],
  outDir: '.',
  minify: true,
  target: 'es2018',
  external: ['react'],
  sourcemap: false,
  dts: true,
  format: ['esm'],
  injectStyle: true,
  esbuildOptions(options) {
    // options.banner = {
    //   js: '"use client"',
    // };
  }
})
