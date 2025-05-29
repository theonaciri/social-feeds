<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Card from '$lib/components/Card.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import List from '$lib/components/List.svelte';
    import type { Item } from '$lib/components/List.svelte';

	const yourCommunities = [
		{
			name: 'Gaming Central',
			subtitle: '24.5K members • Very active',
			avatar: '🎮',
			joined: true
		},
		{
			name: 'Music Lovers',
			subtitle: '15.2K members • Active',
			avatar: '🎵',
			joined: true
		}
	];

	const suggestedCommunities = [
		{
			name: 'Book Club',
			subtitle: '8.7K members • Moderate activity',
			avatar: '📚',
			joined: false
		},
		{
			name: 'Movie Buffs',
			subtitle: '32.1K members • Very active',
			avatar: '🎬',
			joined: false
		},
		{
			name: 'Developers United',
			subtitle: '45.8K members • Extremely active',
			avatar: '💻',
			joined: false
		}
	];

	const featuredCreators = [
		{
			name: '@TechReviewer',
			subtitle: 'Technology • 125K followers',
			avatar: '👨‍💻'
		},
		{
			name: '@ArtisticSoul',
			subtitle: 'Digital Art • 89K followers',
			avatar: '🎨'
		}
	];

	function handleJoinCommunity(communityName: string) {
		console.log(`Joined community: ${communityName}`);
	}

	function handleLeaveCommunity(communityName: string) {
		console.log(`Left community: ${communityName}`);
	}

	function handleFollowCreator(creatorName: string) {
		console.log(`Following creator: ${creatorName}`);
	}
</script>

<svelte:head>
	<title>Fanbase - Social network</title>
	<meta name="description" content="Connect with your favorite communities and fandoms" />
</svelte:head>

<PageContainer maxWidth="800px">
	<PageHeader 
		title="Fanbase" 
		description="Join communities, follow your favorite creators, and connect with fellow fans!" 
	/>
	
	<Section title="Your Communities">
		<List items={yourCommunities}>
			{#snippet children(community: Item)}
				<UserCard
					name={community.name}
					subtitle={community.subtitle}
					avatar={community.avatar}
				>
					{#snippet actions()}
						<Button 
							variant="success" 
							onclick={() => handleLeaveCommunity(community.name)}
						>
							Joined
						</Button>
					{/snippet}
				</UserCard>
			{/snippet}
		</List>
	</Section>
	
	<Section title="Suggested Communities">
		<List items={suggestedCommunities}>
			{#snippet children(community: Item)}
				<UserCard
					name={community.name}
					subtitle={community.subtitle}
					avatar={community.avatar}
				>
					{#snippet actions()}
						<Button 
							variant="primary" 
							onclick={() => handleJoinCommunity(community.name)}
						>
							Join
						</Button>
					{/snippet}
				</UserCard>
			{/snippet}
		</List>
	</Section>
	
	<Section title="Featured Creators">
		<List items={featuredCreators}>
			{#snippet children(creator: Item)}
				<UserCard
					name={creator.name}
					subtitle={creator.subtitle}
					avatar={creator.avatar}
				>
					{#snippet actions()}
						<Button 
							variant="primary" 
							onclick={() => handleFollowCreator(creator.name)}
						>
							Follow
						</Button>
					{/snippet}
				</UserCard>
			{/snippet}
		</List>
	</Section>
</PageContainer>


