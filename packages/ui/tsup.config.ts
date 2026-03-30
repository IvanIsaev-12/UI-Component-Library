import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	splitting: true,
	sourcemap: true,
	clean: true,
	external: ["react", "react-dom"],
	banner: {
		js: "'use client';",
	},
	// Copy CSS file to dist folder
	onSuccess: "cp src/styles.css dist/styles.css",
});
