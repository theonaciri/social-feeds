<script lang="ts">
	interface Props {
		title: string;
		description?: string;
	}

	let { title, description }: Props = $props();
</script>

<div class="page-header">
	<h1>{title}</h1>
	{#if description}
		<p class="description">{description}</p>
	{/if}
</div>

<style>
	.page-header {
		margin-bottom: 2rem;
	}

	h1 {
		color: #ff3e00;
		margin-bottom: 1rem;
		font-size: 2.5rem;
	}

	.description {
		font-size: 1.1rem;
		color: #666;
		margin: 0;
		line-height: 1.6;
	}
</style>
