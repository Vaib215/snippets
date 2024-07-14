import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./components/index.ts"],
    treeshake: true,
    minify: true,
    tsconfig: "./tsup.tsconfig.json",
    dts: true,
    external: ["react", "react-dom"],
    clean: true,
    outDir: "./components/build-sandpack",
  },
]);
