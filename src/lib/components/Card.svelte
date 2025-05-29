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
		background: #f8f9fa;
		border-radius: 8px;
		border-left: 4px solid #ff3e00;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		transition: all 0.2s ease;
	}

	.card:hover {
		transform: translateY(-1px);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}
</style>
