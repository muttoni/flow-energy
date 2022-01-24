<script>
	import { flowTransactions } from "./store";
	// import { longpress } from './actions.js';

	function handleClick() {
	  $flowTransactions++;
	}
</script>

<style>
	button {
	  background: #00ef8a;
	  color: black;
	  font-weight: 700;
	  padding: 10px 20px;
	  font-family: termina, sans-serif;
	  font-size: 1rem;
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

<button on:click={handleClick}>
  Flow transactions: { $flowTransactions }
</button>