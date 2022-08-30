import { writable, derived } from "svelte/store";

export const ETH_TX_CONSUMPTION = 224; // https://ethereum.org/en/energy-consumption / number of yearly Eth tx
export const ETH_TX_PER_SEC = 15;

export const FLOW_TX_CONSUMPTION = 0.001; // 0.18gwh / 169M tx in T12M

export const ethEnergy = writable(0);
export const playingTime = writable(+new Date());

export const flowTransactions = writable(0);
export const flowEnergy = derived(flowTransactions, ($flowTransactions) => {
  if ($flowTransactions > 0) ethEnergy.set(ETH_TX_CONSUMPTION);
  return $flowTransactions * FLOW_TX_CONSUMPTION;
});

// enable this for dynamic eth tx consumption
// setInterval(() => {
//   ethEnergy.update((old) => old + ETH_TX_CONSUMPTION);
// }, 2000);
