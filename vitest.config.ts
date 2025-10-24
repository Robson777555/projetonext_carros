import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ necessário para o path.resolve

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ configura "@/" como "src/"
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    include: ["src/**/*.spec.{ts,tsx}"],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['node_modules/', '.next/', 'src/app/data/cars.ts', 'src/app/layout.tsx'],
      all: true,
    },
  },
});
