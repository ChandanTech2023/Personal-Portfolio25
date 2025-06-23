import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

   //Set Alis for Source folder instead of directory for folder
  resolve:{
    alias:{
      "@" :path.resolve(__dirname , "./src"),
    }
  },
})
