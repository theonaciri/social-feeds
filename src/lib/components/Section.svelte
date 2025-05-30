<script lang="ts">
	interface Props {
		title?: string;
		subtitle?: string;
		margin?: string;
		padding?: string;
		class?: string;
        children: import('svelte').Snippet;
	}

	let { title, subtitle, margin = "2rem 0", padding = "0", class: className = "", children }: Props = $props();
</script>

<section class="section {className}" style="margin: {margin}; padding: {padding};">
	{#if title}
		<div class="section-header">
			<h2 class="section-title">{title}</h2>
			{#if subtitle}
				<p class="section-subtitle">{subtitle}</p>
			{/if}
		</div>
	{/if}
	
	<div class="section-content">
		{@render children()}
	</div>
</section>

<style>
	.section {
		width: 100%;
	}

	.section-header {
		margin-bottom: 1rem;
	}

	.section-title {
		color: var(--color-text);
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.section-subtitle {
		color: var(--color-text);
		opacity: 0.7;
		margin: 0;
		font-size: 1rem;
		line-height: 1.5;
	}

	.section-content {
		width: 100%;
	}
</style>
