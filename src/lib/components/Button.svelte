<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'transparent';
		size?: 'small' | 'medium' | 'large';
		children: import('svelte').Snippet;
		onclick?: () => void;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
	}

	let { 
		variant = 'primary', 
		size = 'medium', 
		children, 
		onclick, 
		disabled = false, 
		type = 'button',
		class: className = ''
	}: Props = $props();

	function handleClick() {
		if (!disabled && onclick) {
			onclick();
		}
	}
</script>

<button 
	class="btn btn-{variant} btn-{size} {className}" 
	{type}
	{disabled}
	onclick={handleClick}
>
	{@render children()}
</button>

<style>
	.btn {
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.2s ease;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* Variants */
	.btn-primary {
		background: #ff3e00;
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		background: #e8350e;
	}

	.btn-secondary {
		background: #6c757d;
		color: white;
	}

	.btn-secondary:hover:not(:disabled) {
		background: #5a6268;
	}

	.btn-success {
		background: #28a745;
		color: white;
	}

	.btn-success:hover:not(:disabled) {
		background: #218838;
	}

	.btn-danger {
		background: #dc3545;
		color: white;
	}

	.btn-danger:hover:not(:disabled) {
		background: #c82333;
	}

	.btn-transparent {
		background: transparent;
		color: #666;
		border: 1px solid #dee2e6;
	}

	.btn-transparent:hover:not(:disabled) {
		background: #e9ecef;
	}

	/* Sizes */
	.btn-small {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
	}

	.btn-medium {
		padding: 0.5rem 1rem;
		font-size: 1rem;
	}

	.btn-large {
		padding: 0.75rem 1.5rem;
		font-size: 1.125rem;
	}
</style>
