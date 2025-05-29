<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';
	import List from '$lib/components/List.svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let selectedCategory = $state('All');
	let isTransitioning = $state(false);

	const categories = ['All', 'Technology', 'Social', 'Gaming', 'Entertainment'];

	const allNewsArticles = $state([
		// Technology articles
		{
			title: 'SvelteKit 2.0 Released with Amazing New Features',
			content: 'The latest version of SvelteKit brings improved performance, better developer experience, and new capabilities for building modern web applications.',
			source: 'Tech News',
			time: '2 hours ago',
			likes: 45,
			comments: 12,
			category: 'Technology'
		},
		{
			title: 'Web Development Trends for 2025',
			content: 'A comprehensive look at the technologies and methodologies that will shape web development in the coming year.',
			source: 'Dev Weekly',
			time: '1 day ago',
			likes: 156,
			comments: 34,
			category: 'Technology'
		},
		{
			title: 'AI Revolution in Frontend Development',
			content: 'How artificial intelligence is transforming the way we build user interfaces and developer tools.',
			source: 'AI Tech Today',
			time: '3 hours ago',
			likes: 78,
			comments: 19,
			category: 'Technology'
		},
		// Social articles
		{
			title: 'The Future of Social Networking',
			content: 'Exploring how modern social platforms are evolving to provide better user experiences and more meaningful connections.',
			source: 'Social Media Today',
			time: '5 hours ago',
			likes: 89,
			comments: 23,
			category: 'Social'
		},
		{
			title: 'Digital Privacy in Social Media',
			content: 'Understanding the importance of privacy settings and data protection in modern social platforms.',
			source: 'Privacy Weekly',
			time: '8 hours ago',
			likes: 64,
			comments: 15,
			category: 'Social'
		},
		{
			title: 'Building Healthy Online Communities',
			content: 'Best practices for creating and maintaining positive social spaces on the internet.',
			source: 'Community Builder',
			time: '12 hours ago',
			likes: 92,
			comments: 28,
			category: 'Social'
		},
		// Gaming articles
		{
			title: 'Top 10 Indie Games of 2025',
			content: 'Discover the most innovative and entertaining independent games released this year.',
			source: 'Indie Gaming Hub',
			time: '4 hours ago',
			likes: 134,
			comments: 42,
			category: 'Gaming'
		},
		{
			title: 'The Rise of Web-Based Gaming',
			content: 'How browser games are becoming more sophisticated and competitive with native applications.',
			source: 'Web Gaming News',
			time: '6 hours ago',
			likes: 87,
			comments: 21,
			category: 'Gaming'
		},
		{
			title: 'Gaming Accessibility Features',
			content: 'How modern games are becoming more inclusive with better accessibility options.',
			source: 'Accessible Gaming',
			time: '10 hours ago',
			likes: 73,
			comments: 16,
			category: 'Gaming'
		},
		// Entertainment articles
		{
			title: 'Streaming Wars: What to Watch in 2025',
			content: 'A comprehensive guide to the best shows and movies across all major streaming platforms.',
			source: 'Entertainment Weekly',
			time: '7 hours ago',
			likes: 112,
			comments: 35,
			category: 'Entertainment'
		},
		{
			title: 'Virtual Concerts Taking Center Stage',
			content: 'How virtual reality and online platforms are revolutionizing live music experiences.',
			source: 'Music Tech',
			time: '9 hours ago',
			likes: 96,
			comments: 24,
			category: 'Entertainment'
		},
		{
			title: 'The Future of Interactive Media',
			content: 'Exploring how entertainment is becoming more interactive and personalized.',
			source: 'Media Innovation',
			time: '14 hours ago',
			likes: 68,
			comments: 18,
			category: 'Entertainment'
		}
	]);

	// Filtered articles based on selected category
	let filteredArticles = $derived(selectedCategory === 'All' 
		? allNewsArticles 
		: allNewsArticles.filter(article => article.category === selectedCategory));

	function handleCategoryChange(category: string) {
		if (category !== selectedCategory) {
			isTransitioning = true;
			selectedCategory = category;
			setTimeout(() => {
				isTransitioning = false;
			}, 300);
		}
	}

	function handleLike(articleIndex: number) {
		const article = filteredArticles[articleIndex];
		const originalIndex = allNewsArticles.findIndex(a => a === article);
		if (originalIndex !== -1) {
			allNewsArticles[originalIndex].likes += 1;
		}
	}

	function handleComment(articleIndex: number) {
		const article = filteredArticles[articleIndex];
		console.log(`Comment on article: ${article.title}`);
	}

	function handleShare(articleIndex: number) {
		const article = filteredArticles[articleIndex];
		console.log(`Share article: ${article.title}`);
	}
</script>

<svelte:head>
	<title>News - Social network</title>
	<meta name="description" content="Stay updated with the latest news" />
</svelte:head>

<PageContainer maxWidth="800px">
	<PageHeader 
		title="News" 
		description="Stay informed with the latest updates and trending topics." 
	/>
	
	<div class="news-content">
		<div in:fade={{ duration: 300 }}>
			<CategoryFilter 
				{categories}
				activeCategory={selectedCategory}
				onCategoryChange={handleCategoryChange}
			/>
		</div>
		
		<div class="articles-wrapper">
			{#key selectedCategory}
				<div 
					in:fly={{ y: -20, duration: 400, delay: 200, easing: quintOut }}
					out:fly={{ y: 20, duration: 200, easing: quintOut }}
					class="articles-container"
				>
					<List items={filteredArticles}>
						{#snippet children(article, index)}
							<div 
								in:scale={{ duration: 300, delay: index * 50, start: 0.8, easing: quintOut }}
								out:fade={{ duration: 150 }}
							>
								<NewsCard
									title={article.title}
									content={article.content}
									source={article.source}
									time={article.time}
									likes={article.likes}
									comments={article.comments}
									onLike={() => handleLike(index)}
									onComment={() => handleComment(index)}
									onShare={() => handleShare(index)}
								/>
							</div>
						{/snippet}
					</List>
				</div>
			{/key}
		</div>
	</div>
</PageContainer>

<style>
	.news-content {
		margin-top: 2rem;
	}

	.articles-wrapper {
		position: relative;
		min-height: 200px;
	}

	.articles-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
	}

	:global(.category-btn) {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transform: translateY(0);
	}

	:global(.category-btn:hover) {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	:global(.category-btn.active) {
		transform: scale(1.05);
		box-shadow: 0 6px 20px rgba(255, 62, 0, 0.3);
	}
</style>
