<script lang="ts">
  // Module imports
  import Board from "./lib/Board.svelte";
</script>

<main>
  <h1>Tictactoe game</h1>
  <p class="subheader">Built with SvelteJS</p>
  <!-- Board -->
  <Board></Board>
  <!-- Gameover -->
</main>

<style>
.subheader {
  font-size: 1.5rem;
  margin-bottom: 2em;
}
</style>
