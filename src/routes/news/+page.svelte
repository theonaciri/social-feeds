<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';
	import List from '$lib/components/List.svelte';

	let selectedCategory = 'All';

	const categories = ['All', 'Technology', 'Social', 'Gaming', 'Entertainment'];

	const newsArticles = [
		{
			title: 'SvelteKit 2.0 Released with Amazing New Features',
			content: 'The latest version of SvelteKit brings improved performance, better developer experience, and new capabilities for building modern web applications.',
			source: 'Tech News',
			time: '2 hours ago',
			likes: 45,
			comments: 12
		},
		{
			title: 'The Future of Social Networking',
			content: 'Exploring how modern social platforms are evolving to provide better user experiences and more meaningful connections.',
			source: 'Social Media Today',
			time: '5 hours ago',
			likes: 89,
			comments: 23
		},
		{
			title: 'Web Development Trends for 2025',
			content: 'A comprehensive look at the technologies and methodologies that will shape web development in the coming year.',
			source: 'Dev Weekly',
			time: '1 day ago',
			likes: 156,
			comments: 34
		}
	];

	function handleCategoryChange(category: string) {
		selectedCategory = category;
	}

	function handleLike(articleIndex: number) {
		newsArticles[articleIndex].likes += 1;
	}

	function handleComment(articleIndex: number) {
		console.log(`Comment on article: ${newsArticles[articleIndex].title}`);
	}

	function handleShare(articleIndex: number) {
		console.log(`Share article: ${newsArticles[articleIndex].title}`);
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
		<CategoryFilter 
			{categories}
			activeCategory={selectedCategory}
			onCategoryChange={handleCategoryChange}
		/>
		
		<List items={newsArticles}>
			{#snippet children(article, index)}
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
			{/snippet}
		</List>
	</div>
</PageContainer>

<style>
	.news-content {
		margin-top: 2rem;
	}
</style>
