<script>
	export let data;
	const { Content, title, date, tags } = data;
</script>

<article>
	<a href="javascript:history.back()" class="back-link">../</a>
	<h2>{title}</h2>
	<span>
		<i>
			<time datetime={date}>{date}</time>
		</i>
	</span>
	<span class="tags">
		{#each tags as tag, index}
			<a href="/tag/{tag}" class="tag-link">{tag}</a>{#if index != tags.length - 1}<span
					>,
				</span>{/if}
		{/each}
	</span>
	<br /><br />

	<Content />
</article>
