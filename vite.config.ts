import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// Obtener el equivalente a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
