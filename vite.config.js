// vite.config.js

// import types for vitest config autocomplete
/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: ['es2022', 'edge112', 'firefox112', 'chrome112', 'safari16.4', 'ios16.4']
  },
  test: {
    // globals: true, // register test API globally
    // disable threads on GH actions to speed it up
    threads: !process.env.GITHUB_ACTIONS,
    setupFiles: ['./scripts/vitest-setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html']
    }
  }
});
