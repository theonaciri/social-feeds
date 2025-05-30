<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import Icon from './Icon.svelte';
	
	function handleToggle() {
		toggleTheme();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleToggle();
		}
	}
</script>

<button
	class="theme-toggle"
	class:dark={$theme === 'dark'}
	onclick={handleToggle}
	onkeydown={handleKeydown}
	type="button"
	aria-label="Toggle dark mode"
	aria-pressed={$theme === 'dark'}
>
	<div class="toggle-track">
		<div class="toggle-thumb">
			<Icon name={$theme === 'dark' ? 'moon' : 'sun'} size="14" />
		</div>
	</div>
	<span class="toggle-label">
		{$theme === 'dark' ? 'Dark' : 'Light'} mode
	</span>
</button>
