<script lang="ts">
	interface Props {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		color?: string;
		weight?: 'normal' | 'medium' | 'semibold' | 'bold';
		align?: 'left' | 'center' | 'right';
		margin?: string;
		class?: string;
        children: import('svelte').Snippet;
	}

	let {
		level = 2,
		size = 'md',
		color = '#333',
		weight = 'semibold',
		align = 'left',
		margin = '0',
		class: className = '',
		children
	}: Props = $props();

	const sizeMap = {
		'xs': '0.875rem',   // 14px
		'sm': '1rem',       // 16px
		'md': '1.25rem',    // 20px
		'lg': '1.5rem',     // 24px
		'xl': '2rem',       // 32px
		'2xl': '2.5rem'     // 40px
	};

	const weightMap = {
		'normal': '400',
		'medium': '500',
		'semibold': '600',
		'bold': '700'
	};
</script>

<svelte:element 
	this={`h${level}`} 
	class="heading {className}"
	style="font-size: {sizeMap[size]}; color: {color}; font-weight: {weightMap[weight]}; text-align: {align}; margin: {margin};"
>
	{@render children()}
</svelte:element>

<style>
	.heading {
		line-height: 1.2;
		font-family: inherit;
	}

	.heading:where(h1) {
		font-size: 2.5rem;
		font-weight: 700;
	}

	.heading:where(h2) {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.heading:where(h3) {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.heading:where(h4) {
		font-size: 1.125rem;
		font-weight: 500;
	}

	.heading:where(h5) {
		font-size: 1rem;
		font-weight: 500;
	}

	.heading:where(h6) {
		font-size: 0.875rem;
		font-weight: 500;
	}
</style>
