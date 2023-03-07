<!-- Script -->
<script lang="ts">
  // Module import
  import Square from "./Square.svelte";
  import Message from "./Message.svelte";

  // Squares array
  let squares = Array(9).fill("");

  // Turn info
  let turn = "X";

  // Playing info
  let playing = true;
  let winner = "";
  let userAction = true;

  // Winning combo
  let winningCombo = [];

  // Game message
  let msg = "Test";
  let showMsg = false;
  let msgTimeout: ReturnType<typeof setTimeout>;

  // Handle clicked square
  function handleClickedSquare(event: CustomEvent) {
    if (squares[event.detail.id] !== "" || !userAction) return;
    // Update squares array
    squares[event.detail.id] = turn;
    squares = squares;
    // CHeck for winner or draw
    if (!isWinner()) isDraw();
    // Update turn
    turn = turn === "X" ? "O" : "X";
  }

  // Check for a winner
  function isWinner() {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    possibleLines.forEach((line) => {
      const [a, b, c] = line;
      if (
        squares[a] !== "" &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("winner");
        winningCombo = [a, b, c];
        userAction = false;
        setTimeout(() => (playing = false), 1000);
        showMsg = true;
        msgTimeout = setTimeout(() => (showMsg = false), 4000);
        return true;
      }
    });
    return false;
  }

  // Check for a draw
  function isDraw() {
    let draw = squares.filter((s) => s === "").length === 0;
    if (draw) {
      console.log("draw");
      playing = false;
      userAction = false;
      showMsg = true;
      setTimeout(() => (showMsg = false), 4000);
    }
  }

  // Play a new game
  function playNewGame() {
    squares = Array(9).fill("");
    winner = "";
    playing = true;
    winningCombo = [];
    userAction = true;
    showMsg = false;
    clearTimeout(msgTimeout);
  }
</script>

<!-- HTML -->
{#if playing}
  <div class="board">
    {#each squares as _, i}
      <Square
        content={squares[i]}
        index={i}
        wincombo={winningCombo}
        on:squareclick={handleClickedSquare}
      />
    {/each}
  </div>
{:else}
  <div class="gameover">
    {#if winner !== ""}
      <div>The winner is {winner}.</div>
    {:else}
      <div>The game ended in a draw.</div>
    {/if}
    <button on:click={playNewGame}>Play again</button>
  </div>
{/if}
{#if showMsg}
  <!-- Message -->
  <Message
    message={msg}
    on:click={() => {
      showMsg = false;
    }}
  />
{/if}

<!-- Style -->
<style>
  .board,
  .gameover {
    margin: 0 auto;
    padding: 1em;
    width: 50vmin;
    aspect-ratio: 1;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .gameover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .gameover div {
    font-size: 1.25em;
    font-weight: bold;
  }
</style>
