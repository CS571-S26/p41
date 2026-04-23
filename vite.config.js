import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// Must match hosted site path; production build writes to docs/ for GitHub Pages.
export default defineConfig({
  base: "/p41/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    outDir: "docs"
  }
})
