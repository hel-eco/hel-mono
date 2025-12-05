import moduleCss from "esbuild-plugin-module-css";
import { defineConfig } from "tsup";
import pkgJson from "./package.json";

export default defineConfig({
  entry: ['src/index.ts', 'src/.hel/entrance/libTypes.ts'],
  format: ['esm', 'cjs'],
  treeshake: false,
  sourcemap: true,
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  external: ["react"],
  injectStyle: true,
  esbuildPlugins: [moduleCss({ moduleCssScopePrefix: pkgJson.name })],
});
