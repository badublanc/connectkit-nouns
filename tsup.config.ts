import fs from 'fs';
import { defineConfig } from 'tsup';
import pkgConfig from './package.json';

const config = defineConfig({
	entry: ['src/avatar/index.tsx'],
	outDir: './dist',
	clean: true,
	format: 'esm',
	platform: 'browser',
	dts: true,
	external: [...Object.keys(pkgConfig.peerDependencies)],
	async onSuccess() {
		// copy package.json to dist
		const pkg: Record<string, unknown> = { ...pkgConfig };
		delete pkg.scripts;
		delete pkg.devDependencies;
		fs.writeFileSync('./dist/package.json', JSON.stringify(pkg, null, 2));

		// copy readme to dist
		const readme = fs.readFileSync('./readme.md');
		fs.writeFileSync('./dist/readme.md', readme);
	},
});

export default config;
