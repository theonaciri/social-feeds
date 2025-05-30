<script lang="ts">
	interface Props {
		name: string;
		subtitle?: string;
		avatar?: string;
		actions?: import('svelte').Snippet;
		onclick?: () => void;
	}

	import Card from './Card.svelte';

	let { name, subtitle, avatar, actions, onclick }: Props = $props();
</script>

<Card padding="1rem">
	<div class="user-profile">
		<div class="profile-info">
			{#if avatar}
				<div class="avatar">
					{avatar}
				</div>
			{/if}
			<div class="info">
				<strong class="name">{name}</strong>
				{#if subtitle}
					<small class="subtitle">{subtitle}</small>
				{/if}
			</div>
		</div>
		
		{#if actions}
			<div class="profile-actions">
				{@render actions()}
			</div>
		{/if}
	</div>
</Card>

<style>
	.user-profile {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background: transparent;
		border: none;
		padding: 0;
		text-align: left;
		transition: all 0.2s ease;
	}
	.profile-info {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex: 1;
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: var(--color-bg-2);
		border: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		flex-shrink: 0;
		transition: all 0.2s ease;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.name {
		display: block;
		color: var(--color-text);
		font-size: 1rem;
		font-weight: 600;
	}

	.subtitle {
		color: var(--color-text);
		opacity: 0.7;
		font-size: 0.9rem;
	}

	.profile-actions {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
</style>
