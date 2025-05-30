<script lang="ts">
	interface Props {
		title: string;
		content: string;
		time?: string;
		author?: string;
		likes?: number;
		comments?: number;
		shares?: number;
		onLike?: () => void;
		onComment?: () => void;
		onShare?: () => void;
	}

	import ActionButtons from './ActionButtons.svelte';
	import Card from './Card.svelte';

	let { 
		title, 
		content, 
		time, 
		author,
		likes = 0, 
		comments = 0, 
		shares = 0,
		onLike,
		onComment,
		onShare
	}: Props = $props();
</script>

<Card>
	<article class="post card">
		<div class="post-header">
			<h3>{title}</h3>
			{#if author}
				<span class="post-author">by {author}</span>
			{/if}
		</div>
		
		<p class="post-content">{content}</p>
		
		<div class="post-footer">
			{#if time}
				<small class="post-time">{time}</small>
			{/if}
			
			<ActionButtons 
				{likes} 
				{comments} 
				{shares}
				{onLike}
				{onComment}
				{onShare}
			/>
		</div>
	</article>
</Card>

<style>
	.post {
		padding: 0;
	}

	.post-header {
		margin-bottom: 1rem;
	}

	.post-header h3 {
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
		font-size: 1.3rem;
		font-weight: 600;
	}

	.post-author {
		color: var(--color-text);
		opacity: 0.7;
		font-size: 0.9rem;
		font-style: italic;
	}

	.post-content {
		margin: 0 0 1rem 0;
		line-height: 1.6;
		color: var(--color-text);
		opacity: 0.9;
	}

	.post-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 0.5rem;
		border-top: 1px solid var(--color-border);
	}

	.post-time {
		color: var(--color-text);
		opacity: 0.6;
		font-size: 0.85rem;
	}
</style>
