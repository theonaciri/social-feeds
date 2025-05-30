<script lang="ts">
	interface Props {
		label: string;
		name: string;
		type?: string;
		placeholder?: string;
		value?: string;
		required?: boolean;
		disabled?: boolean;
		error?: string;
		class?: string;
	}

	let { 
		label, 
		name, 
		type = 'text', 
		placeholder, 
		value = '', 
		required = false, 
		disabled = false, 
		error,
		class: className = ''
	}: Props = $props();
</script>

<div class="input-group">
	<label for={name} class="input-label">
		{label}
		{#if required}
			<span class="required">*</span>
		{/if}
	</label>
	
	<input
		id={name}
		{name}
		{type}
		{placeholder}
		bind:value
		{required}
		{disabled}
		class="input {className}"
		class:error={error}
	/>
	
	{#if error}
		<span class="error-message">{error}</span>
	{/if}
</div>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.input-label {
		font-weight: 500;
		color: var(--color-text);
		font-size: 0.9rem;
	}

	.required {
		color: #dc3545;
		margin-left: 0.25rem;
	}

	.input {
		padding: 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		font-size: 1rem;
		transition: all 0.2s ease;
		background: var(--color-input-bg);
		color: var(--color-text);
	}

	.input:focus {
		outline: none;
		border-color: var(--color-theme-1);
		box-shadow: 0 0 0 2px rgba(255, 62, 0, 0.2);
	}

	.input:disabled {
		background: var(--color-bg-2);
		color: var(--color-text);
		opacity: 0.6;
		cursor: not-allowed;
	}

	.input::placeholder {
		color: var(--color-text);
		opacity: 0.5;
	}

	.input.error {
		border-color: #dc3545;
	}

	.input.error:focus {
		border-color: #dc3545;
		box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.2);
	}

	.error-message {
		color: #dc3545;
		font-size: 0.875rem;
	}
</style>
