import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Project is on /mnt/c when run from WSL; inotify doesn't work across
    // the Windows mount, so poll for changes to make HMR work.
    watch: {
      usePolling: true,
    },
  },
})
