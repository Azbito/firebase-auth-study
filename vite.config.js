import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv';

// Load environment variables from .env.development file
dotenv.config({ path: '.env.development' });

export default defineConfig({
  plugins: [reactRefresh()],
});
