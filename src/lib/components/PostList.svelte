<script>
	export let posts;
    export let type;
</script>

<ul>
	{#each posts as post}
		<li>
			<span>{post.metadata.date}</span>
			{#if type == 'tag'}
                <a href=../../{post.path}>{post.metadata.title}</a>
            {:else}
                <a href={post.path}>{post.metadata.title}</a>
                <span class="tags">
                    {#each post.metadata.tags as tag, index}
                        <a href="/tag/{tag}" class="tag-link">{tag}</a>{#if index != post.metadata.tags.length - 1}<span>, </span>{/if}
                    {/each}
                </span>
            {/if}
		</li>
	{/each}
</ul>

