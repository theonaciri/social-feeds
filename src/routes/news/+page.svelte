<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';
	import List from '$lib/components/List.svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	let selectedCategory = $state('All');
	let isTransitioning = $state(false);

	const categories = ['All', 'Technology', 'Social', 'Gaming', 'Entertainment'];

	const allNewsArticles = $state([
		// Technology articles
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
			category: 'Technology'
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
			category: 'Technology'
		},
		{
			id: 3,
			slug: 'ai-revolution-frontend-development',
			title: 'AI Revolution in Frontend Development',
			content: 'How artificial intelligence is transforming the way we build user interfaces and developer tools.',
			fullContent: 'How artificial intelligence is transforming the way we build user interfaces and developer tools. The integration of artificial intelligence in frontend development is revolutionizing how developers approach user interface design and implementation. AI-powered code generation tools are becoming more sophisticated, helping developers write more efficient and accessible code. Machine learning algorithms are being used to optimize user experiences through personalized content delivery and predictive user interface adaptations. These advancements are not only improving productivity but also enabling developers to create more intuitive and responsive applications that better serve user needs.',
			source: 'AI Tech Today',
			author: 'Dr. Emily Rodriguez',
			time: '3 hours ago',
			likes: 78,
			comments: 19,
			category: 'Technology'
		},
		// Social articles
		{
			id: 4,
			slug: 'future-social-networking',
			title: 'The Future of Social Networking',
			content: 'Exploring how modern social platforms are evolving to provide better user experiences and more meaningful connections.',
			fullContent: 'Exploring how modern social platforms are evolving to provide better user experiences and more meaningful connections. The social media landscape is undergoing a fundamental transformation as platforms prioritize authentic interactions over passive consumption. New algorithms are being developed to promote genuine conversations and reduce the spread of misinformation. Privacy-first approaches are becoming standard, with users gaining more control over their data and how it\'s used. Emerging platforms are experimenting with decentralized architectures that give communities more autonomy. These changes reflect a growing awareness that social media should serve users rather than exploit them, leading to more sustainable and meaningful online relationships.',
			source: 'Social Media Today',
			author: 'Alex Thompson',
			time: '5 hours ago',
			likes: 89,
			comments: 23,
			category: 'Social'
		},
		{
			id: 5,
			slug: 'digital-privacy-social-media',
			title: 'Digital Privacy in Social Media',
			content: 'Understanding the importance of privacy settings and data protection in modern social platforms.',
			fullContent: 'Understanding the importance of privacy settings and data protection in modern social platforms. As social media becomes increasingly integrated into our daily lives, protecting personal information has never been more critical. This comprehensive guide explores the various privacy controls available across major platforms and provides practical strategies for maintaining digital security. From understanding data collection practices to configuring privacy settings effectively, users need to be proactive about protecting their online presence. The article also covers emerging privacy technologies, regulatory changes like GDPR, and how to recognize and avoid privacy-invasive practices while still enjoying the benefits of social connectivity.',
			source: 'Privacy Weekly',
			author: 'Dr. Maria Santos',
			time: '8 hours ago',
			likes: 64,
			comments: 15,
			category: 'Social'
		},
		{
			id: 6,
			slug: 'building-healthy-online-communities',
			title: 'Building Healthy Online Communities',
			content: 'Best practices for creating and maintaining positive social spaces on the internet.',
			fullContent: 'Best practices for creating and maintaining positive social spaces on the internet. Creating thriving online communities requires intentional design, clear guidelines, and active moderation. This article examines successful community-building strategies from various platforms and provides actionable insights for community managers and platform designers. Key topics include establishing community values, implementing effective moderation systems, fostering inclusive environments, and handling conflicts constructively. The piece also explores how technology can support community health through features like reputation systems, transparent governance structures, and tools that empower users to self-moderate and contribute positively to their communities.',
			source: 'Community Builder',
			author: 'Jordan Kim',
			time: '12 hours ago',
			likes: 92,
			comments: 28,
			category: 'Social'
		},
		// Gaming articles
		{
			id: 7,
			slug: 'top-10-indie-games-2025',
			title: 'Top 10 Indie Games of 2025',
			content: 'Discover the most innovative and entertaining independent games released this year.',
			fullContent: 'Discover the most innovative and entertaining independent games released this year. The indie gaming scene has exploded with creativity and innovation, delivering experiences that rival major studio productions. From pixel-perfect platformers to mind-bending puzzle games, independent developers are pushing the boundaries of what games can be. This year\'s selection includes groundbreaking narrative adventures, innovative gameplay mechanics, and stunning artistic achievements. Each game represents hours of passionate development and showcases the incredible talent within the indie community. These titles prove that you don\'t need massive budgets to create memorable gaming experiences.',
			source: 'Indie Gaming Hub',
			author: 'Marcus Rivera',
			time: '4 hours ago',
			likes: 134,
			comments: 42,
			category: 'Gaming'
		},
		{
			id: 8,
			slug: 'rise-web-based-gaming',
			title: 'The Rise of Web-Based Gaming',
			content: 'How browser games are becoming more sophisticated and competitive with native applications.',
			fullContent: 'How browser games are becoming more sophisticated and competitive with native applications. Web technologies have advanced to the point where browser-based games can deliver console-quality experiences without requiring downloads or installations. WebGL, WebAssembly, and modern JavaScript frameworks enable developers to create rich, interactive gaming experiences that run seamlessly across devices. From multiplayer battle royales to complex strategy games, the web platform is proving to be a viable alternative to traditional gaming platforms. This shift is democratizing game distribution and making high-quality gaming accessible to anyone with an internet connection.',
			source: 'Web Gaming News',
			author: 'Lisa Park',
			time: '6 hours ago',
			likes: 87,
			comments: 21,
			category: 'Gaming'
		},
		{
			id: 9,
			slug: 'gaming-accessibility-features',
			title: 'Gaming Accessibility Features',
			content: 'How modern games are becoming more inclusive with better accessibility options.',
			fullContent: 'How modern games are becoming more inclusive with better accessibility options. The gaming industry is making significant strides in ensuring that games are accessible to players with disabilities. From colorblind-friendly palettes to customizable control schemes, developers are implementing features that remove barriers to gaming. Screen readers, haptic feedback, and audio cues are being integrated to support players with visual impairments. The movement toward inclusive design is not just about compliance but about recognizing that diverse players bring diverse perspectives that enrich the gaming experience for everyone.',
			source: 'Accessible Gaming',
			author: 'Dr. Jennifer Walsh',
			time: '10 hours ago',
			likes: 73,
			comments: 16,
			category: 'Gaming'
		},
		// Entertainment articles
		{
			id: 10,
			slug: 'streaming-wars-what-to-watch-2025',
			title: 'Streaming Wars: What to Watch in 2025',
			content: 'A comprehensive guide to the best shows and movies across all major streaming platforms.',
			fullContent: 'A comprehensive guide to the best shows and movies across all major streaming platforms. The streaming landscape has become increasingly competitive, with platforms investing billions in original content to attract and retain subscribers. From blockbuster series to intimate documentaries, there\'s something for every viewer. This year has seen remarkable diversity in storytelling, with international content gaining global recognition and niche genres finding their audiences. The guide covers must-watch originals, hidden gems, and upcoming releases that will define entertainment in 2025. Whether you\'re into sci-fi epics, true crime, or romantic comedies, the streaming wars have delivered unprecedented variety and quality.',
			source: 'Entertainment Weekly',
			author: 'Rachel Green',
			time: '7 hours ago',
			likes: 112,
			comments: 35,
			category: 'Entertainment'
		},
		{
			id: 11,
			slug: 'virtual-concerts-taking-center-stage',
			title: 'Virtual Concerts Taking Center Stage',
			content: 'How virtual reality and online platforms are revolutionizing live music experiences.',
			fullContent: 'How virtual reality and online platforms are revolutionizing live music experiences. The pandemic accelerated the adoption of virtual concert technologies, but what started as a necessity has evolved into an exciting new medium for musical expression. Artists can now create immersive experiences impossible in physical venues, with interactive elements, 360-degree visuals, and intimate settings that bring fans closer to their favorite performers. Virtual concerts are democratizing access to live music, allowing global audiences to attend exclusive performances. The technology continues to improve, offering higher fidelity audio, better video quality, and more sophisticated interaction capabilities.',
			source: 'Music Tech',
			author: 'David Symphony',
			time: '9 hours ago',
			likes: 96,
			comments: 24,
			category: 'Entertainment'
		},
		{
			id: 12,
			slug: 'future-interactive-media',
			title: 'The Future of Interactive Media',
			content: 'Exploring how entertainment is becoming more interactive and personalized.',
			fullContent: 'Exploring how entertainment is becoming more interactive and personalized. The boundaries between passive consumption and active participation are blurring as entertainment becomes more interactive. From choose-your-own-adventure streaming shows to AI-generated content that adapts to viewer preferences, the future of media is increasingly personalized. Interactive storytelling allows audiences to influence narratives, while virtual and augmented reality create immersive experiences that respond to user actions. This evolution is transforming how we think about entertainment, moving from one-size-fits-all content to experiences tailored to individual preferences and behaviors. The technology promises to make entertainment more engaging and personally meaningful.',
			source: 'Media Innovation',
			author: 'Future Vision',
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
			
			// Lock the height during transition
			const wrapper = document.querySelector('.articles-wrapper') as HTMLElement | null;
			if (wrapper) {
				wrapper.style.height = wrapper.offsetHeight + 'px';
			}
			
			selectedCategory = category;
			setTimeout(() => {
				isTransitioning = false;
				// Release the height lock
				if (wrapper) {
					wrapper.style.height = '';
				}
			}, 600); // Increased to account for transition duration
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

	function handleArticleClick(articleIndex: number) {
		const article = filteredArticles[articleIndex];
		goto(`/news/${article.slug}`);
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
									onClick={() => handleArticleClick(index)}
								/>
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
		overflow: hidden;
	}

	.articles-container {
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
