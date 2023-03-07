<!-- Script -->
<script lang="ts">
  // Imports
  import { fade } from "svelte/transition";

  // Props
  export let message: string;
</script>

<!-- HTML -->
<div transition:fade class="game-message" on:click>
    {message}
</div>
<!-- Style -->
<style>
  .game-message {
    background-color: var(--bg-color2);
    color: var(--color2);
    padding: 1em 2em;
    position: absolute;
    top: 1%;
    right: 0;
    cursor: pointer;
  }
</style>
