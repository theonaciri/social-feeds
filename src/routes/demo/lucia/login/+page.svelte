<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import Form from '$lib/components/Form.svelte';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';

	let { form }: { form: ActionData } = $props();
</script>

<Heading level={1} size="xl" align="center">Login/Register</Heading>

<Form>
	<form method="post" action="?/login" use:enhance>
		<Input
			label="Username"
			name="username"
			required
		/>
		
		<Input
			label="Password"
			name="password"
			type="password"
			required
		/>
		
		<div style="display: flex; gap: 1rem;">
			<Button type="submit" variant="primary">
				Login
			</Button>
			<Button 
				type="submit" 
				variant="secondary"
				formaction="?/register"
			>
				Register
			</Button>
		</div>
	</form>
	
	{#if form?.message}
		<p style="color: red; margin-top: 1rem;">{form.message}</p>
	{/if}
</Form>
