// vite.config.js
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default {
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "api",
          dest: "./"
        }
      ]
    })
  ],
  build: {
    minify: "terser"
  },
  server: {
    port: 3000
  }
}
