<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	import '$lib/styles/main.scss';
	import Analytics from '$lib/components/Analytics.svelte';
</script>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>bustinbung{$page.url.pathname}</title>

	{#if !dev}
		<Analytics />
	{/if}
</head>
