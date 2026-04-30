// Vite + React Compiler; `base` / `outDir` match GitHub Pages (`/p41/`, `docs/`).
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

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
