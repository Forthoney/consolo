<script>
	import PostList from '$lib/components/PostList.svelte';
	import { page } from '$app/stores'

	export let data;
	const { posts } = data;

</script>

<a href="javascript:history.back()" class="back-link">../</a>
<h2>{$page.params.tag}</h2>

<PostList {posts} type='tag'/>