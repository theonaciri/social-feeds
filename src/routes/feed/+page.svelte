<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import List from '$lib/components/List.svelte';
    import type { Item } from '$lib/components/List.svelte';
    import { fade } from 'svelte/transition';
    type Post = {
        id: number;
        title: string;
        content: string;
        author: string;
        time: string;
        likes: number;
        comments: number;
        shares: number;
    };
	// Sample data
	const posts: Post[] = [
		{
			id: 1,
			title: "Sample Post",
			content: "This is where your friends' posts would appear. Stay connected with your social circle!",
			author: "Jane Smith",
			time: "2 hours ago",
			likes: 12,
			comments: 3,
			shares: 1
		},
		{
			id: 2,
			title: "Another Update",
			content: "Share your thoughts, photos, and experiences with your network.",
			author: "Mike Johnson",
			time: "5 hours ago",
			likes: 8,
			comments: 2,
			shares: 0
		}
	];

	function handleLike(postId: number) {
		console.log('Liked post:', postId);
	}

	function handleComment(postId: number) {
		console.log('Comment on post:', postId);
	}

	function handleShare(postId: number) {
		console.log('Share post:', postId);
	}
</script>

<svelte:head>
	<title>Feed - Social network</title>
	<meta name="description" content="Your social feed" />
</svelte:head>

<PageContainer>
	<PageHeader 
		title="Feed" 
		description="Welcome to your social feed! Here you'll see updates from your friends and the community."
	/>
	
	<div in:fade={{ duration: 300, delay: 100 }}>
		<List 
			items={posts} 
			class="mt-4"
		>
			{#snippet children(item, index)}
				<div in:fade={{ duration: 300 }}>
					<PostCard 
						title={item.title}
						content={item.content}
						author={item.author}
						time={item.time}
						likes={item.likes}
						comments={item.comments}
						shares={item.shares}
						onLike={() => handleLike(item.id)}
						onComment={() => handleComment(item.id)}
						onShare={() => handleShare(item.id)}
					/>
				</div>
			{/snippet}
		</List>
	</div>
</PageContainer>
