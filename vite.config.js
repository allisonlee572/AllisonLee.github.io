import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AllisonLee",
})

// https://www.youtube.com/watch?v=hn1IkJk24ow tutorial for hosting on github pages
