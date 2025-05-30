<script lang="ts">
	interface Props {
		likes?: number;
		comments?: number;
		shares?: number;
		onLike?: () => void;
		onComment?: () => void;
		onShare?: () => void;
		size?: 'small' | 'medium';
	}

	let { 
		likes = 0, 
		comments = 0, 
		shares = 0, 
		onLike, 
		onComment, 
		onShare,
		size = 'medium'
	}: Props = $props();
</script>

<div class="action-buttons action-buttons-{size}">
	<button class="action-btn like-btn" onclick={onLike}>
		👍 {likes}
	</button>
	
	<button class="action-btn comment-btn" onclick={onComment}>
		💬 {comments}
	</button>
	
	<button class="action-btn share-btn" onclick={onShare}>
		🔄 {shares > 0 ? shares : 'Share'}
	</button>
</div>

<style>
	.action-buttons {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.action-buttons-small {
		gap: 0.5rem;
	}

	.action-btn {
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		transition: all 0.2s ease;
		font-size: 0.9rem;
		color: var(--color-text);
	}

	.action-buttons-small .action-btn {
		padding: 0.125rem 0.25rem;
		font-size: 0.8rem;
	}

	.action-btn:hover {
		background: var(--color-button-bg);
		transform: translateY(-1px);
	}

	.like-btn:hover {
		color: #28a745;
	}

	.comment-btn:hover {
		color: var(--color-theme-2);
	}

	.share-btn:hover {
		color: #17a2b8;
	}
</style>
