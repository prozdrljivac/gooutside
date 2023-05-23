<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let value = "";

	const dispatch = createEventDispatcher();

	function handleInput(event: Event) {
		if (event.target) {
			dispatch("input", (event.target as HTMLInputElement).value);
		}
	}
</script>

<input class="input" {...$$props} {value} on:input={handleInput} />

<style>
	.input {
		background-color: #d5dcdc;
		border: none;
		border-radius: 5px;
		color: #738f80;
		font-size: 16px;
		font-weight: bold;
		padding: 16px 8px;
	}

	.input:focus {
		outline: none;
	}
</style>
