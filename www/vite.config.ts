import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

// Used for easy path resolution in both windows and *nix envs
import { resolve } from 'path'

import wasm from "vite-plugin-wasm";
// not needed, but important for supporting older browsers
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta
                main: resolve(import.meta.url, 'index.html'),
                bootstrap: resolve(import.meta.url, 'bootstrap.js')
            }
        }
    },
    server: {
        open: 'index.html'
    },
    plugins: [
        wasm(),
        topLevelAwait()
    ]
}) satisfies UserConfig