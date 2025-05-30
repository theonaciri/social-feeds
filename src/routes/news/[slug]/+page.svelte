<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import Button from '$lib/components/Button.svelte';
	import ActionButtons from '$lib/components/ActionButtons.svelte';
	import { goto } from '$app/navigation';
	import { fly, fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// This would normally come from a store or API
	const allArticles = [
		{
			id: 1,
			slug: 'sveltekit-2-0-released-amazing-features',
			title: 'SvelteKit 2.0 Released with Amazing New Features',
			content: 'The latest version of SvelteKit brings improved performance, better developer experience, and new capabilities for building modern web applications.',
			fullContent: 'The latest version of SvelteKit brings improved performance, better developer experience, and new capabilities for building modern web applications. This major release introduces significant improvements to the build process, enhanced TypeScript support, and better integration with modern deployment platforms. Developers can now enjoy faster hot module replacement, improved error handling, and a more intuitive API design. The new version also includes experimental features for server-side rendering optimization and enhanced security measures that make SvelteKit applications more robust and performant than ever before.',
			source: 'Tech News',
			author: 'Sarah Johnson',
			time: '2 hours ago',
			likes: 45,
			comments: 12,
			category: 'Technology',
			image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
		},
		{
			id: 2,
			slug: 'web-development-trends-2025',
			title: 'Web Development Trends for 2025',
			content: 'A comprehensive look at the technologies and methodologies that will shape web development in the coming year.',
			fullContent: 'A comprehensive look at the technologies and methodologies that will shape web development in the coming year. The landscape of web development continues to evolve rapidly, with new frameworks, tools, and best practices emerging constantly. This year, we\'re seeing a strong focus on performance optimization, accessibility improvements, and the integration of AI-powered development tools. Progressive web applications are becoming more sophisticated, while the adoption of modern CSS features and JavaScript frameworks is accelerating. Developers are also embracing new deployment strategies and cloud-native architectures that enable more scalable and maintainable applications.',
			source: 'Dev Weekly',
			author: 'Michael Chen',
			time: '1 day ago',
			likes: 156,
			comments: 34,
			category: 'Technology',
			image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
		}
	];

	let currentSlug = $page.params.slug;
	let article = $derived(allArticles.find(a => a.slug === currentSlug) || allArticles[0]);

	let likes = $derived(article.likes);
	let commentsCount = $derived(article.comments);
	let shares = $state(0);

	function handleLike() {
		likes += 1;
	}

	function handleComment() {
		commentsCount += 1;
	}

	function handleShare() {
		shares += 1;
	}

	function goBack() {
		goto('/news');
	}

	// Mock comments data
	const comments = [
		{
			id: 1,
			author: 'John Doe',
			content: 'Great article! Very informative and well-written.',
			time: '1 hour ago',
			avatar: '👤'
		},
		{
			id: 2,
			author: 'Jane Smith',
			content: 'I completely agree with the points made here. Looking forward to seeing how this develops.',
			time: '3 hours ago',
			avatar: '👩'
		},
		{
			id: 3,
			author: 'Tech Enthusiast',
			content: 'This is exactly what I was looking for. Thanks for sharing!',
			time: '5 hours ago',
			avatar: '🚀'
		}
	];
</script>

<svelte:head>
	<title>{article.title} - Social Network</title>
	<meta name="description" content={article.content} />
</svelte:head>

<div class="article-page" in:fade={{ duration: 150 }}>
	<PageContainer maxWidth="800px">
		<div class="back-navigation" in:fly={{ x: -20, duration: 200, delay: 33 }}>
			<Button variant="secondary" onclick={goBack}>
				← Back to News
			</Button>
		</div>

		<article class="full-article" in:scale={{ duration: 250, delay: 67, start: 0.95, easing: quintOut }}>
			<header class="article-header">
				<div class="article-meta" in:fly={{ y: 20, duration: 200, delay: 100 }}>
					<span class="category">{article.category}</span>
					<span class="source">{article.source}</span>
					<span class="time">{article.time}</span>
				</div>
				
				<h1 class="article-title" in:fly={{ y: 30, duration: 250, delay: 133, easing: quintOut }}>
					{article.title}
				</h1>
				
				<div class="author-info" in:fly={{ y: 20, duration: 200, delay: 167 }}>
					<span class="author">By {article.author}</span>
				</div>
			</header>

			<div class="article-image" in:scale={{ duration: 300, delay: 200, start: 0.9, easing: quintOut }}>
				<img src={article.image} alt={article.title} />
			</div>

			<div class="article-content" in:fly={{ y: 30, duration: 250, delay: 233, easing: quintOut }}>
				<p class="lead">{article.content}</p>
				<div class="full-content">
					{article.fullContent}
				</div>
			</div>

			<div class="article-actions" in:fly={{ y: 20, duration: 200, delay: 267 }}>
				<ActionButtons 
					{likes} 
					comments={commentsCount}
					{shares}
					onLike={handleLike}
					onComment={handleComment}
					onShare={handleShare}
					size="medium"
				/>
			</div>
		</article>

		<section class="comments-section" in:fly={{ y: 30, duration: 250, delay: 300, easing: quintOut }}>
			<h3>Comments ({commentsCount})</h3>
			
			<div class="comments-list">
				{#each comments as comment, index}
					<div 
						class="comment" 
						in:fly={{ x: -20, duration: 200, delay: 333 + (index * 33), easing: quintOut }}
					>
						<div class="comment-avatar">{comment.avatar}</div>
						<div class="comment-content">
							<div class="comment-header">
								<strong class="comment-author">{comment.author}</strong>
								<span class="comment-time">{comment.time}</span>
							</div>
							<p class="comment-text">{comment.content}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</PageContainer>
</div>

<style>
	.article-page {
		min-height: 100vh;
		padding: 2rem 0;
	}

	.back-navigation {
		margin-bottom: 2rem;
	}

	.full-article {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		margin-bottom: 3rem;
	}

	.article-header {
		margin-bottom: 2rem;
	}

	.article-meta {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.category {
		background: #ff3e00;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.source {
		color: #ff3e00;
		font-weight: 500;
	}

	.time {
		color: #6c757d;
		font-size: 0.9rem;
	}

	.article-title {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.2;
		margin: 1rem 0;
		color: #333;
	}

	.author-info {
		color: #666;
		font-size: 1.1rem;
	}

	.author {
		font-weight: 500;
	}

	.article-image {
		margin: 2rem 0;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
	}

	.article-image img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		display: block;
	}

	.article-content {
		margin: 2rem 0;
	}

	.lead {
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.6;
		color: #555;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #eee;
	}

	.full-content {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #444;
	}

	.article-actions {
		padding: 2rem 0;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin: 2rem 0;
	}

	.comments-section {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.comments-section h3 {
		margin-bottom: 2rem;
		color: #333;
	}

	.comments-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.comment {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background: #f8f9fa;
		border-radius: 8px;
	}

	.comment-avatar {
		font-size: 2rem;
		width: 3rem;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.comment-content {
		flex: 1;
	}

	.comment-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.comment-author {
		color: #333;
	}

	.comment-time {
		color: #6c757d;
		font-size: 0.9rem;
	}

	.comment-text {
		margin: 0;
		line-height: 1.6;
		color: #555;
	}

	@media (max-width: 768px) {
		.article-title {
			font-size: 2rem;
		}

		.full-article {
			padding: 1.5rem;
		}

		.article-image img {
			height: 250px;
		}

		.comments-section {
			padding: 1.5rem;
		}

		.comment {
			padding: 0.75rem;
		}

		.comment-avatar {
			width: 2.5rem;
			height: 2.5rem;
			font-size: 1.5rem;
		}
	}
</style>