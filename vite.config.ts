import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (name.includes(' ') || name.includes("'") || name.includes('é') || name.includes('à')) {
            throw new Error(`Invalid filename detected: ${name}`);
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
