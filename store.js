import { writable, derived } from "svelte/store";

const ETH_TX_CONSUMPTION = 238; // https://www.statista.com/statistics/1265891/ethereum-energy-consumption-transaction-comparison-visa/
export const FLOW_TX_CONSUMPTION = 0.023; // 1gwh / 44M tx in 1 year

export const ethEnergy = writable(0);

export const flowTransactions = writable(0);
export const flowEnergy = derived(flowTransactions, ($flowTransactions) => {
  if ($flowTransactions > 0) ethEnergy.set(ETH_TX_CONSUMPTION);
  return $flowTransactions * FLOW_TX_CONSUMPTION;
});

// enable this for dynamic eth tx consumption
// setInterval(() => {
//   ethEnergy.update((old) => old + ETH_TX_CONSUMPTION);
// }, 2000);
