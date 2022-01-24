<script>
  import { slide } from "svelte/transition";
  import { flowTransactions, flowEnergy, ethEnergy } from "./store";
  
  
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
</style>

<div class="funfact-container">
  {#if $flowTransactions < 1 }
  <p in:slide out:slide class="help"><span class="arrow">↵</span> click this button to create Flow transactions</p>
  {:else if $flowTransactions >= 1 && $flowTransactions < 20}
  <p in:slide out:slide>🌱 1 Flow transaction uses less energy than a single tweet.</p>
  {:else if $flowTransactions >= 20 && $flowTransactions < 30}
  <p in:slide out:slide>✅ Don't worry, this is all simulated! <br/>No environment is being harmed.</p>
  {:else if $flowTransactions >= 30 && $flowTransactions < 55}
  <p in:slide out:slide>⚡️ Keep clicking! <br/>It's going to take about ~11,000 Flow transactions!</p>
  {:else if $flowTransactions >= 55 && $flowEnergy < $ethEnergy}
  <p in:slide out:slide>
    🌱 Web3 doesn't have to come at the cost of the environment.
    <br/><a href="https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/" target="_blank">Build a Web3 app on Flow in minutes</a>
  </p>
  {:else if $flowEnergy > $ethEnergy}
  <p in:slide out:slide>
    🎉 Well done! You really like this game.
    <br/>
    Hopefully you've gotten the point that Flow uses very little energy ⚡️
    <br/><a href="https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/" target="_blank">Build a Web3 app on Flow in minutes</a>
  </p>
  {/if}
</div>
