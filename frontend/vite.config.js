import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import contentPlugin from './plugins/contentPlugin.js';

export default defineConfig({
  plugins: [react(), tailwindcss(), contentPlugin()],
});
