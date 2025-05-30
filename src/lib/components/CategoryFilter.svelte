<script lang="ts">
	interface Props {
		categories: string[];
		activeCategory: string;
		onCategoryChange: (category: string) => void;
	}

	let { categories, activeCategory, onCategoryChange }: Props = $props();

	function handleCategoryClick(category: string) {
		if (onCategoryChange) {
			onCategoryChange(category);
		}
	}
</script>

<div class="category-filter">
	{#each categories as category}
		<button 
			class="button category-btn" 
			class:active={category === activeCategory}
			onclick={() => handleCategoryClick(category)}
		>
			{category}
		</button>
	{/each}
</div>

<style>
	.category-filter {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.category-btn {
		border-radius: 20px;
		font-size: 0.9rem;
	}
</style>
