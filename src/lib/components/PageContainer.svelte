<script lang="ts">
	interface Props {
		children: import('svelte').Snippet;
		maxWidth?: string;
	}

	let { children, maxWidth = '800px' }: Props = $props();
</script>

<div class="page-container" style="max-width: {maxWidth};">
	{@render children()}
</div>

<style>
	.page-container {
		margin: 0 auto;
		padding: 2rem;
	}
</style>
