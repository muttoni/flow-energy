<script>
  import { flowTransactions } from "./store";
  import { onMount } from 'svelte'
  // import { longpress } from './actions.js';
  
  let btn;
  onMount(() => btn.focus())

  function handleClick() {
    $flowTransactions++;
  }
</script>

<style>
  button {
    background: #00ef8a;
    color: black;
    font-weight: 700;
    padding: 20px 20px;
    font-family: termina, sans-serif;
    font-size: 1rem;
    border: none;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 6px 6px black;
  }

  button:focus { outline: none; }
  
  button:active {
    margin-top: 4px;
    margin-bottom: -4px;
    box-shadow: 2px 2px black;
  }
</style>

<button on:click={handleClick} bind:this={btn}>
  {$flowTransactions <= 0 ? 'Click here to mint a Flow NFT!' : `Flow NFTs: ${ ($flowTransactions).toLocaleString('en-US', {maximumFractionDigits: 0}) }` }
</button>