import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3007',
    headless: true,
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3007',
    reuseExistingServer: !process.env.CI,
  },
});
