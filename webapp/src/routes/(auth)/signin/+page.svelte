<script lang="ts">
	import GoButton from "$ui/go-button.svelte";
	import GoInput from "$ui/go-input.svelte";
	import { ButtonType } from "$ui/types";

	import { SignUpSchema } from "$routes/(auth)/signin/validation";

	let username = "";
	let password = "";

	function setUsername(event: CustomEvent) {
		username = event.detail;
	}
	function setPassword(event: CustomEvent) {
		password = event.detail;
	}

	function signIn() {
		const test = SignUpSchema.parse({
			username,
			password
		});
		console.log(test);
	}
</script>

<!-- TODO Add validation ZOD? -->
<div class="signin-form-container">
	<form class="signin-form">
		<GoInput placeholder="Username" value={username} on:input={setUsername} />
		<GoInput placeholder="Password" type="password" value={password} on:input={setPassword} />
		<p class="forgot-password">Forgot your password? Reset your password <a href="/">here</a>.</p>
		<GoButton text="Sign in" on:click={signIn} />
		<GoButton text="Sign up" type={ButtonType.Secondary} />
	</form>
</div>

<style>
	.signin-form-container {
		left: 50%;
		top: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}

	.signin-form {
		width: 400px;
		padding: 64px 16px;
		border: 1px solid #527462;
		border-radius: 5px;
		box-shadow: 0 4px 4px #527462;
		display: flex;
		flex-direction: column;
		gap: 24px;
		text-align: center;
	}

	.forgot-password {
		font-size: 14px;
	}

	.forgot-password > a {
		color: #527462;
	}

	.forgot-password > a:hover {
		color: #738f80;
		cursor: pointer;
	}
</style>
