import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Svelte-App_tictactoe_game/",
  plugins: [svelte()],
})
