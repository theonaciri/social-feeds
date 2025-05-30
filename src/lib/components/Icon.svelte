<script lang="ts">
	interface Props {
		name: string;
		size?: string | number;
		color?: string;
		class?: string;
	}

	let {
		name,
		size = '1em',
		color = 'currentColor',
		class: className = ''
	}: Props = $props();

	const sizeValue = typeof size === 'number' ? `${size}px` : size;

	// Simple icon mapping - in a real app, you'd use a proper icon library
	const icons: Record<string, string> = {
		heart: '❤️',
		like: '👍',
		comment: '💬',
		share: '📤',
		user: '👤',
		users: '👥',
		home: '🏠',
		feed: '📱',
		news: '📰',
		memes: '😂',
		fanbase: '⭐',
		search: '🔍',
		plus: '➕',
		minus: '➖',
		close: '✕',
		check: '✓',
		arrow: '→',
		star: '⭐',
		edit: '✏️',
		delete: '🗑️',
		settings: '⚙️',
		bell: '🔔',
		mail: '✉️',
		camera: '📷',
		video: '🎥',
		image: '🖼️',
		link: '🔗',
		download: '⬇️',
		upload: '⬆️',
		external: '🔗',
		info: 'ℹ️',
		warning: '⚠️',
		error: '❌',
		success: '✅',
		sun: '☀️',
		moon: '🌙'
	};

	const iconContent = icons[name] || name;
</script>

<span 
	class="icon {className}"
	style="font-size: {sizeValue}; color: {color};"
>
	{iconContent}
</span>

<style>
	.icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		user-select: none;
	}

	.icon.clickable {
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	.icon.clickable:hover {
		transform: scale(1.1);
	}

	.icon.clickable:active {
		transform: scale(0.95);
	}
</style>
