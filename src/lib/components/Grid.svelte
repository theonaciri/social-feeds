<script lang="ts">
	interface Props {
		columns?: number | string;
		gap?: string;
		minItemWidth?: string;
		align?: 'start' | 'center' | 'end' | 'stretch';
		justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
		autoFit?: boolean;
		autoFill?: boolean;
		class?: string;
        children: import('svelte').Snippet;
	}

	let {
		columns = 'auto',
		gap = '1rem',
		minItemWidth = '200px',
		align = 'stretch',
		justify = 'start',
		autoFit = false,
		autoFill = false,
		class: className = '',
		children
	}: Props = $props();

	const gridTemplateColumns = $derived(() => {
		if (autoFit) {
			return `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`;
		} else if (autoFill) {
			return `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`;
		} else if (typeof columns === 'number') {
			return `repeat(${columns}, 1fr)`;
		} else {
			return columns;
		}
	});
</script>

<div 
	class="grid {className}"
	style:grid-template-columns={gridTemplateColumns()}
	style:gap={gap}
	style:align-items={align}
	style:justify-content={justify}
>
	{@render children()}
</div>

<style>
	.grid {
		display: grid;
		width: 100%;
	}
</style>
