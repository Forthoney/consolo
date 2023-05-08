<script>
	import PostList from '$lib/components/PostList.svelte';
	import { page } from '$app/stores'

	export let data;
	const { posts } = data;

	const pageHeader = $page.route.id.replace(/\W/g, '')
</script>

<h2>{pageHeader}</h2>

<PostList {posts}/>