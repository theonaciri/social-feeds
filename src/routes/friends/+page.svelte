<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import List from '$lib/components/List.svelte';

	const friendRequests = [
		{
			name: 'John Doe',
			subtitle: '2 mutual friends',
			avatar: '👤'
		}
	];

	const friends = [
		{
			name: 'Jane Smith',
			subtitle: 'Online now',
			avatar: '👩'
		},
		{
			name: 'Mike Johnson',
			subtitle: 'Last seen 2 hours ago',
			avatar: '👨'
		}
	];

	function handleAcceptFriend(name: string) {
		console.log(`Accepted friend request from ${name}`);
	}

	function handleDeclineFriend(name: string) {
		console.log(`Declined friend request from ${name}`);
	}

	function handleMessage(name: string) {
		console.log(`Send message to ${name}`);
	}
</script>

<svelte:head>
	<title>Friends - Social network</title>
	<meta name="description" content="Connect with your friends" />
</svelte:head>

<PageContainer maxWidth="800px">
	<PageHeader 
		title="Friends" 
		description="Manage your friendships and discover new connections." 
	/>
	
	<Section title="Friend Requests">
		<List items={friendRequests}>
			{#snippet children(request)}
				<UserCard
					name={request.name}
					subtitle={request.subtitle}
					avatar={request.avatar}
				>
					{#snippet actions()}
						<div class="friend-actions">
							<Button 
								variant="primary" 
								onclick={() => handleAcceptFriend(request.name)}
							>
								Accept
							</Button>
							<Button 
								variant="secondary" 
								onclick={() => handleDeclineFriend(request.name)}
							>
								Decline
							</Button>
						</div>
					{/snippet}
				</UserCard>
			{/snippet}
		</List>
	</Section>
	
	<Section title="Your Friends">
		<List items={friends}>
			{#snippet children(friend)}
				<UserCard
					name={friend.name}
					subtitle={friend.subtitle}
					avatar={friend.avatar}
				>
					{#snippet actions()}
						<div class="friend-actions">
							<Button 
								variant="primary" 
								onclick={() => handleMessage(friend.name)}
							>
								Message
							</Button>
						</div>
					{/snippet}
				</UserCard>
			{/snippet}
		</List>
	</Section>
</PageContainer>

<style>
	.friend-actions {
		display: flex;
		gap: 0.5rem;
	}
</style>
