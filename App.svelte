<script>
  import Button from "./Button.svelte";
  import TxGraph from "./TxGraph.svelte";
  import FunFacts from './FunFacts.svelte';
  import { flowTransactions } from "./store";
  
  function handleClick() {
    $flowTransactions = 0;
    // $ethEnergy = 0;
  }
</script>

<style>

  footer {
    flex-shrink: 0;
    padding: 20px;
  }

  main {
    flex: 1 0 auto;
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
  <FunFacts />
</main>

<footer>
  <button class="reset" on:click={handleClick}>reset</button>
  <p class="footer">* Ethereum energy consumption from <a href="https://www.statista.com/statistics/1265891/ethereum-energy-consumption-transaction-comparison-visa/" target="_blank">Statista</a></p>
</footer>