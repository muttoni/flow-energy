<script>
  import { ethEnergy, flowTransactions, flowEnergy } from "./store";

  const MAX_HEIGHT = 280;

  let ethGraphHeight;
  let flowGraphHeight;

  $: if ($ethEnergy && $flowTransactions && $flowEnergy) {
    if ($ethEnergy > $flowEnergy) {
      ethGraphHeight = MAX_HEIGHT;
      flowGraphHeight = ($flowEnergy / $ethEnergy) * ethGraphHeight;
    } else {
      flowGraphHeight = MAX_HEIGHT;
      ethGraphHeight = ($ethEnergy / $flowEnergy) * flowGraphHeight;
    }
  }
</script>

<style>
  .graph-container {
    display: flex;
    width: 500px;
    height: 300px;
    margin: 20px auto;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 10px;
    justify-content: center;
  }

  .graph {
    margin-top: auto;
    height: 2px;
    width: 150px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: relative;
    transition: height 0.5s ease-in;
  }

  .graph:first-of-type {
    margin-right: 20px;
  }

  .graph-name {
    font-size: 1rem;
    font-weight: bold;
    margin-top: -20px;
    width: 100%;
    text-align: center;
    position: absolute;
  }

  .flow {
    background-color: #00ff48;
  }

  .eth {
    background-color: grey;
  }
</style>


<div class="graph-container">
  <div class="graph flow" style="height:{flowGraphHeight}px">
    <div class="graph-name">Flow</div>
    <div class="graph-info">{$flowEnergy.toFixed(2)}kwh</div>

  </div>
  <div class="graph eth" style="height:{MAX_HEIGHT}px">
     <div class="graph-name">Ethereum</div>
     <div class="graph-info">{$ethEnergy.toFixed(2)}kwh</div>

  </div>
</div>