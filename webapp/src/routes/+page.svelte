<script lang="ts">
	import GoButton from "./ui/go-button.svelte";
	import GoInput from "./ui/go-input.svelte";

	let counter = 0;

	function incrementCounter() {
		counter += 1;
		console.log(counter);
	}

	let username = "Test";
	function setUsername(event: CustomEvent) {
		username = event.detail;
	}
</script>

<h1>Hello {username}</h1>
<!-- Input example -->
<GoInput placeholder="Username" value={username} on:input={setUsername} />
<!-- Button example -->
<GoButton text={`Login ${counter}`} on:click={incrementCounter} disabled={counter === 10} />
