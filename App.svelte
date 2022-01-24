<script>
  import Button from "./Button.svelte";
  import TxGraph from "./TxGraph.svelte";
  import { slide } from "svelte/transition";
  import { flowTransactions, ethEnergy } from "./store";

  function handleClick() {
    $flowTransactions = 0;
    // $ethEnergy = 0;
  }
</script>

<style>
  main {
    font-family: termina, sans-serif;
    text-align: center;
  }

  .help {
    font-size: 0.8rem;
    color: rgb(106, 106, 106);
  }
  .arrow {
    display: inline-block;
    transform: rotate(90deg);
  }

  .footer {
    font-size: 0.5rem;
  }

  .reset {
    background: #dfdfdf;
    color: black;
    font-weight: 400;
    padding: 3px 12px;
    font-family: termina, sans-serif;
    font-size: 0.8rem;
    border: none;
    border-radius: 10px;
  }
</style>

<main>
	<h1>The Energy Challenge</h1>
	<p>Can you reach the energy consumption of a single Ethereum transaction?</p>
	<TxGraph />
  <Button />
  <p class="help"><span class="arrow">↵</span> click this button to create Flow transactions</p>

  {#if $flowTransactions > 20}
    <p in:slide out:slide>Doesn't seem like it's moving? <br/>It takes about ~11,000 Flow transactions!</p>
  {/if}


  <button class="reset" on:click={handleClick}>reset</button>

  <p class="footer">* Ethereum energy consumption from <a href="https://www.statista.com/statistics/1265891/ethereum-energy-consumption-transaction-comparison-visa/" target="_blank">Statista</a></p>
</main>