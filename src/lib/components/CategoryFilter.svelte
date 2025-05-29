<script lang="ts">
	interface Props {
		categories: string[];
		activeCategory?: string;
		onCategoryChange?: (category: string) => void;
	}

	let { categories, activeCategory = categories[0], onCategoryChange }: Props = $props();

	function handleCategoryClick(category: string) {
		if (onCategoryChange) {
			onCategoryChange(category);
		}
	}
</script>

<div class="category-filter">
	{#each categories as category}
		<button 
			class="category-btn" 
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
		background: #f8f9fa;
		border: 1px solid #dee2e6;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.2s;
		font-size: 0.9rem;
	}

	.category-btn.active {
		background: #ff3e00;
		color: white;
		border-color: #ff3e00;
	}

	.category-btn:hover {
		background: #e9ecef;
	}

	.category-btn.active:hover {
		background: #e8350e;
	}
</style>
