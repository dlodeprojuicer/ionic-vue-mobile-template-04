import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'tests/e2e/specs/**/*.js',
    supportFile: 'tests/e2e/support/index.js',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    setupNodeEvents() {
      return undefined
    },
  },
})
