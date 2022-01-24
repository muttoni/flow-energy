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
    border-bottom: 1px solid rgb(124, 124, 124);
    justify-content: center;
  }

  .graph {
    margin-top: auto;
    height: 0px;
    width: 180px;
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
    bottom: 50px;
    width: 100%;
    text-align: center;
    position: absolute;
  }

  .graph-info {
    font-size: 0.7rem;
    font-weight: lighter;
    bottom: 10px;
    width: 100%;
    text-align: center;
    position: absolute;
  }

  .flow {
    background-color: #00ef8a;
  }

  .eth {
    background-color: rgb(192, 192, 192);
  }
</style>


<div class="graph-container">
  <div class="graph flow" style="height:{flowGraphHeight}px">
    <div class="graph-name">Flow</div>
    <div class="graph-info">
      {$flowTransactions} transaction{$flowTransactions === 1 ? '' : 's'}<br/>
      {$flowEnergy ? $flowEnergy.toFixed(2): 0}kWh
    </div>

  </div>
  <div class="graph eth" style="height:{ $ethEnergy > 0 ? MAX_HEIGHT : 0}px">
     <div class="graph-name">Ethereum</div>
     <div class="graph-info">
      { $ethEnergy > 0 ? 1 : 0} transaction{$ethEnergy > 0 ? '' : 's'}<br/>
      ~{$ethEnergy}kWh*
    </div>

  </div>
</div>