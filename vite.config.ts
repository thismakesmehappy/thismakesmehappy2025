import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    // Ensure HTML assets are processed with base path
    experimental: {
      renderBuiltUrl(filename, { hostType }) {
        if (hostType === 'html') {
          return (env.VITE_BASE_PATH || '/') + filename
        }
        return { relative: true }
      }
    }
  }
})
