import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment. 
  // Replace 'LpageM' with your exact GitHub repository name if it differs.
  base: '/Maltraxis/',
})
