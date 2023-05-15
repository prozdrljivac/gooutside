<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import { ButtonType } from "./types";

	export let text: string;
	export let type: ButtonType = ButtonType.Primary;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("click");
	}
</script>

<button class="btn {type} {$$props.disabled && 'disabled'}" {...$$props} on:click={handleClick}
	>{text}</button
>

<style>
	.btn {
		padding: 16px;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #000000;
		border: 1px #527462 solid;
		border-radius: 5px;
	}

	.btn:hover {
		cursor: pointer;
	}

	.primary {
		background-color: #527462;
		color: #ffffff;
	}

	.secondary {
		background-color: #ffffff;
		color: #527462;
	}

	.disabled {
		background-color: #d5dcdc;
		color: #7c7c7c;
	}

	.btn:hover.disabled {
		cursor: not-allowed;
	}
</style>
