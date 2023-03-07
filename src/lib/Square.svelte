<!-- Script -->
<script lang="ts">
  // Imports
  import { createEventDispatcher } from "svelte";

  // Event dispatcher
  const dispatch = createEventDispatcher();

  function clickedSquare() {
    dispatch("squareclick", {
      id: index,
    });
  }

  // Props
  export let content: string;
  export let index: number;
  export let wincombo: Array<number>;
</script>

<!-- HTML -->
<button
  class="square"
  on:click={clickedSquare}
  data-index={index}
  class:winner={wincombo.includes(index)}>{content}</button
>

<!-- Style -->
<style>
  .square {
    background-color: steelblue;
    color: white;
    font-size: 2.5em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    /*no button*/
    border-radius: 0;
    border: none;
    padding: 0;
  }

  .square.winner {
    background-color: hsl(120, 30%, 55%);
  }
</style>
