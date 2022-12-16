import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.js',
            userscript: {
                namespace: 'lzwi/copyija',
                author: 'lzw-723',
                description: '网页复制限制解除脚本',
                version: '1.0.0',
                match: ['https://www.hrrsj.com/*'],
                "run-at": 'document-start',
                license: 'GPL-3'
            },
        }),
    ],
});
