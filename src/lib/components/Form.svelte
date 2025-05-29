<script lang="ts">
	interface Props {
		children: import('svelte').Snippet;
		padding?: string;
		gap?: string;
		align?: 'left' | 'center' | 'right';
		direction?: 'row' | 'column';
		class?: string;
	}

	let { 
		children, 
		padding = '1.5rem', 
		gap = '1rem',
		align = 'left',
		direction = 'column',
		class: className = ''
	}: Props = $props();
</script>

<form class="form {className}" style="padding: {padding}; gap: {gap}; align-items: {align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'}; flex-direction: {direction};">
	{@render children()}
</form>

<style>
	.form {
		display: flex;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border: 1px solid #e9ecef;
	}

	.form:focus-within {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}
</style>
