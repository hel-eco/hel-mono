import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/.hel/entrance/libTypes.ts'],
    // format: ['esm', 'cjs', 'iife'],
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    treeshake: false,
  },
]);
