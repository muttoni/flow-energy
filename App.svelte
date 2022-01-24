<script>
  import Button from "./Button.svelte";
  import TxGraph from "./TxGraph.svelte";
  import { flowTransactions, ethEnergy } from "./store";

  function handleClick() {
    $flowTransactions = 0;
    // $ethEnergy = 0;
  }
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h1>The Energy Challenge</h1>
	<p>Can you reach the energy consumption of a single Ethereum transaction?</p>
	<TxGraph />
  <Button />
  <p>^ click this button to create a transaction.</p>

  {#if $flowTransactions > 20}
    <p>Doesn't seem like it's moving? <br/>That's because you need to click about 11,000 times :)</p>
  {/if}


  <button on:click={handleClick}>reset</button>
</main>