<script>
  import { slide } from "svelte/transition";
  import { flowTransactions, flowEnergy, ethEnergy, playingTime, ETH_TX_PER_SEC, ETH_TX_CONSUMPTION, FLOW_TX_CONSUMPTION} from "./store";
  
</script>

<style>

  .funfact-container {
    min-height: 100px;
    display:block;
    width:100%;
    margin-top: 30px;
  }

  .help {
    font-size: 0.8rem;
    color: rgb(106, 106, 106);
  }
  .arrow {
    display: inline-block;
    transform: rotate(90deg);
  }

  button {
    background: #00ef8a;
    color: black;
    font-weight: 700;
    padding: 10px 20px;
    font-family: termina, sans-serif;
    font-size: 0.8rem;
    border: none;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 6px 6px black;
  }
  
  button:active {
    margin-top: 4px;
    margin-bottom: -4px;
    box-shadow: 2px 2px black;
  }
</style>

<div class="funfact-container">
  {#if $flowTransactions < 1 }
  <p in:slide out:slide class="help"><span class="arrow">↵</span> use this button to create Flow transactions</p>
  {:else if $flowTransactions >= 1 && $flowTransactions < 20}
  <p in:slide out:slide>🌱 1 Flow transaction uses less energy than a single tweet.</p>
  {:else if $flowTransactions >= 20 && $flowTransactions < 35}
  <p in:slide out:slide>✅ Don't worry, this is all simulated! <br/>No environment is being harmed.</p>
  {:else if $flowTransactions >= 35 && $flowTransactions < 55}
  <p in:slide out:slide>⚡️ Keep clicking! <br/>It's going to take about ~10,000 more Flow transactions!</p>
  {:else if $flowTransactions >= 55 && $flowEnergy < $ethEnergy}
  {#if $flowTransactions >= 75}
  <p in:slide out:slide>
    🤯 Wow, you are not giving up, huh? <br/>
    <button on:click={() => $flowTransactions = $flowTransactions + 500}>Create 500 transactions at a time</button>
  </p>
  {/if}
  <p in:slide out:slide>
    🌱 Web3 doesn't have to come at the cost of the environment.
    <br/><a href="https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/" target="_blank">Build a Web3 app on Flow in minutes</a>
  </p>
  {:else if $flowEnergy > $ethEnergy}
  <p in:slide out:slide>
    🎉 Well done! You reached 1 Ethereum transaction.
    <br/>Unfortunately, it took you <strong>{ ((+new Date() - $playingTime) / 1000).toLocaleString('en-US', {maximumFractionDigits: 0}) }</strong> seconds to play this game,
    <br/>and in this time the Ethereum network processed <strong>{(((+new Date() - $playingTime) / 1000) * ETH_TX_PER_SEC).toLocaleString('en-US', {maximumFractionDigits: 0})}</strong> transactions
    <br/>meaning you would still need to click <strong>{((((+new Date() - $playingTime) / 1000) * ETH_TX_PER_SEC * ETH_TX_CONSUMPTION) / FLOW_TX_CONSUMPTION).toLocaleString('en-US', {maximumFractionDigits: 0})}</strong> more times.
    <br/>
    <br/><a href="https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/" target="_blank">Build a sustainable Web3 app on Flow in minutes</a>
  </p>
  {/if}
</div>
