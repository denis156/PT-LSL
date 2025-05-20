import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';

const host = 'pt-lsl.test';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        host,
        hmr: { host },
        https: {
            key: fs.readFileSync(`/Users/denisdjadianardika/Library/Application Support/Herd/config/valet/Certificates/${host}.key`),
            cert: fs.readFileSync(`/Users/denisdjadianardika/Library/Application Support/Herd/config/valet/Certificates/${host}.crt`),
        }
    }
});
