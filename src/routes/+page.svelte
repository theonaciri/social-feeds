<script lang="ts">
	import Counter from './Counter.svelte';
	import Card from '$lib/components/Card.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';

	const actionCards = [
		{
			href: '/feed',
			title: '📱 Feed',
			description: 'See what\'s happening in your network'
		},
		{
			href: '/friends',
			title: '👥 Friends',
			description: 'Connect and manage your friendships'
		},
		{
			href: '/memes',
			title: '😂 Memes',
			description: 'Share and discover funny content'
		},
		{
			href: '/news',
			title: '📰 News',
			description: 'Stay updated with latest trends'
		},
		{
			href: '/fanbase',
			title: '⭐ Fanbase',
			description: 'Join communities and follow creators'
		}
	];
</script>

<svelte:head>
	<title>Social network</title>
	<meta name="description" content="Social network application" />
</svelte:head>

<section>
	<Heading level={1} class="welcome-title">
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>
		Social network
	</Heading>

	<p class="intro">
		Welcome to your social hub! Connect with friends, share m emes, stay updated with news, and join communities.
	</p>

	<Grid columns="auto-fit" autoFit={true} gap="1rem" class="quick-actions">
		{#each actionCards as card}
			<a href={card.href} class="action-link">
				<Card padding="1.5rem">
					<Heading level={3} size="lg" class="card-title">{card.title}</Heading>
					<p class="card-description">{card.description}</p>
				</Card>
			</a>
		{/each}
	</Grid>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.intro {
		font-size: 1.2rem;
		text-align: center;
		color: #666;
		margin: 2rem 0;
		max-width: 600px;
		line-height: 1.6;
	}

	.quick-actions {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		width: 100%;
		max-width: 800px;
		margin: 2rem 0;
	}

	.action-link {
		text-decoration: none;
		color: inherit;
	}

	.action-link h3 {
		margin: 0 0 0.5rem 0;
		color: #333;
		font-size: 1.1rem;
	}

	.action-link p {
		margin: 0;
		color: #666;
		font-size: 0.9rem;
		line-height: 1.4;
	}
</style>
