<script lang="ts">
	import GoButton from "./ui/go-button.svelte";

	let counter = 0;

	function incrementCounter() {
		counter += 1;
		console.log(counter);
	}
</script>

<h1>Hello World!</h1>
<!-- Button example -->
<GoButton text={`Login ${counter}`} on:click={incrementCounter} disabled={counter === 10} />
