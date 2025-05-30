<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly, fade, scale } from 'svelte/transition';

    export interface Item {
        [key: string]: any;
    }
	interface Props {
		items: Item[];
		gap?: string;
		direction?: 'vertical' | 'horizontal';
		align?: 'start' | 'center' | 'end';
		wrap?: boolean;
		class?: string;
		emptyMessage?: string;
		children?: Snippet<[Item, number]>;
	}

	let {
		items,
		gap = '1rem',
		direction = 'vertical',
		align = 'start',
		wrap = false,
		class: className = '',
		emptyMessage = 'No items to display',
		children
	}: Props = $props();

	const isHorizontal = direction === 'horizontal';
</script>

<div 
	class="list {className}"
	class:horizontal={isHorizontal}
	class:vertical={!isHorizontal}
	class:wrap
	style="gap: {gap}; align-items: {align};"
>
	{#if items.length > 0}
		{#each items as item, index}
			<div class="list-item">
				{#if children}
					{@render children(item, index)}
				{:else}
					{item}
				{/if}
			</div>
		{/each}
	{:else}
		<div class="empty-state">
			<p>{emptyMessage}</p>
		</div>
	{/if}
</div>

<style>
	.list {
		display: flex;
		width: 100%;
	}

	.list.vertical {
		flex-direction: column;
	}

	.list.horizontal {
		flex-direction: row;
	}

	.list.wrap {
		flex-wrap: wrap;
	}

	.list-item {
		flex-shrink: 0;
	}

	.empty-state {
		width: 100%;
		text-align: center;
		padding: 2rem;
		color: #666;
	}

	.empty-state p {
		margin: 0;
		font-style: italic;
	}
</style>
