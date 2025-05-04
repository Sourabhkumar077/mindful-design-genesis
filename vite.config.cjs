const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const path = require('path')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/contexts": path.resolve(__dirname, "./src/contexts"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
    },
  },
}) 