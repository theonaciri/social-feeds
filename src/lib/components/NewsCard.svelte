<script lang="ts">
	interface Props {
		title: string;
		content: string;
		source?: string;
		time?: string;
		likes?: number;
		comments?: number;
		shares?: number;
		onLike?: () => void;
		onComment?: () => void;
		onShare?: () => void;
		onClick?: () => void;
	}

	import ActionButtons from './ActionButtons.svelte';
	import Card from './Card.svelte';

	let { 
		title, 
		content, 
		source, 
		time, 
		likes = 0, 
		comments = 0, 
		shares = 0,
		onLike,
		onComment,
		onShare,
		onClick
	}: Props = $props();
</script>

<Card>
	<article class="news-article" class:clickable={onClick} onclick={onClick}>
		<div class="article-header">
			<h3>{title}</h3>
			{#if time}
				<span class="article-time">{time}</span>
			{/if}
		</div>
		
		<p class="article-content">{content}</p>
		
		<div class="article-footer">
			{#if source}
				<span class="article-source">{source}</span>
			{/if}
			
			<ActionButtons 
				{likes} 
				{comments} 
				{shares}
				{onLike}
				{onComment}
				{onShare}
				size="small"
			/>
		</div>
	</article>
</Card>

<style>
	.news-article {
		padding: 0;
		transition: transform 0.2s ease;
	}

	.news-article.clickable {
		cursor: pointer;
	}

	.news-article.clickable:hover {
		transform: translateY(-2px);
	}

	.article-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.article-header h3 {
		margin: 0;
		color: #333;
		flex: 1;
		margin-right: 1rem;
		font-size: 1.2rem;
	}

	.article-time {
		color: #6c757d;
		font-size: 0.9rem;
		white-space: nowrap;
	}

	.article-content {
		margin: 0 0 1rem 0;
		line-height: 1.6;
		color: #555;
	}

	.article-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.article-source {
		font-weight: 500;
		color: #ff3e00;
		font-size: 0.9rem;
	}
</style>
