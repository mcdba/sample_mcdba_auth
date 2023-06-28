<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	export let data;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">@mcdba/auth</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if data.user}
					<a class="btn btn-sm variant-ghost-surface" href="/protectedRoute">Protected Route</a>
					<a class="btn btn-sm variant-ghost-surface" href="/logout">LogOut</a>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/login">LogIn</a>
					<a class="btn btn-sm variant-ghost-surface" href="/registration">Register</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="container mx-auto p-2 h-full">
		<slot />
	</div>
	<svelte:fragment slot="footer">
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</svelte:fragment>
</AppShell>
