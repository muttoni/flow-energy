<script>
	import { flowTransactions } from "./store";
	// import { longpress } from './actions.js';

	function handleClick() {
	  $flowTransactions++;
	}
</script>

<style>
	button {
	  background: #00ff48;
	  color: black;
	  font-weight: 900;
	  font-size: 2rem;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 10px;
	  box-shadow: 6px 6px black;
	}

	button:active {
	  margin-top: 4px;
	  margin-bottom: -4px;
	  box-shadow: 2px 2px black;
	}
</style>

<button on:click={handleClick}>
  Flow transactions: { $flowTransactions }
</button>