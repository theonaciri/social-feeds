<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Card from '$lib/components/Card.svelte';
	import ActionButtons from '$lib/components/ActionButtons.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import List from '$lib/components/List.svelte';
	import { fadeIn, staggeredSlide } from '$lib/transitions.ts';

	const memes = [
		{
			content: '🐸 "When you finally understand SvelteKit"',
			likes: 124,
			comments: 23
		},
		{
			content: '😂 "Me explaining why my code works: It\'s magic"',
			likes: 89,
			comments: 15
		},
		{
			content: '🤯 "When your TypeScript code actually compiles on first try"',
			likes: 256,
			comments: 42
		}
	];

	function handleLike(memeIndex: number) {
		memes[memeIndex].likes += 1;
	}

	function handleComment(memeIndex: number) {
		console.log(`Comment on meme: ${memes[memeIndex].content}`);
	}

	function handleShare(memeIndex: number) {
		console.log(`Share meme: ${memes[memeIndex].content}`);
	}
</script>

<svelte:head>
	<title>Memes - Social network</title>
	<meta name="description" content="Share and discover funny memes" />
</svelte:head>

<PageContainer maxWidth="800px">
	<PageHeader 
		title="Memes" 
		description="The best place for laughs and viral content!" 
	/>
	
	<Section title="Trending Memes">
		<List items={memes}>
			{#snippet children(meme, index)}
				<Card padding="1.5rem">
					<div class="meme-placeholder">
						<p>{meme.content}</p>
					</div>
					<ActionButtons
						likes={meme.likes}
						comments={meme.comments}
						onLike={() => handleLike(index)}
						onComment={() => handleComment(index)}
						onShare={() => handleShare(index)}
					/>
				</Card>
			{/snippet}
		</List>
	</Section>
</PageContainer>

<style>
	.meme-placeholder {
		background: #e9ecef;
		border-radius: 4px;
		padding: 2rem;
		text-align: center;
		margin-bottom: 1rem;
		min-height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.meme-placeholder p {
		font-size: 1.2rem;
		margin: 0;
		font-weight: 500;
	}
</style>
