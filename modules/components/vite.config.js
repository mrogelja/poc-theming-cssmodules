import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Components',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(dependencies)],
    },
  },
});
