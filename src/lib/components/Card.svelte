<script lang="ts">
	interface Props {
		children: import('svelte').Snippet;
		padding?: string;
		margin?: string;
	}

	let { children, padding = '1.5rem', margin = '1rem' }: Props = $props();
</script>

<div class="card" style="padding: {padding}; margin-bottom: {margin};">
	{@render children()}
</div>

<style>
	.card {
        width: 100%;
		background: var(--color-card-bg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		border-left: 4px solid var(--color-theme-1);
		box-shadow: 0 2px 8px var(--color-shadow);
		transition: all 0.2s ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 16px var(--color-shadow);
	}
</style>
