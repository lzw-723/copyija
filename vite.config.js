import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import pg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.js',
            userscript: {
                namespace: 'lzwi/copyija',
                author: 'lzw-723',
                description: pg.description,
                version: pg.version,
                match: ['https://www.hrrsj.com/*', 'https://www.xuexila.com/*'],
                "run-at": 'document-start',
                license: 'GPL-3'
            },
        }),
    ],
});
