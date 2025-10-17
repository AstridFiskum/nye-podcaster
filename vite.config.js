// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// });


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nye-podcaster/',
})
