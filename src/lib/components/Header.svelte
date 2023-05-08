<script>
	const pages = [
		{
			title: 'home/',
			url: '/'
		},
		{
			title: 'about/',
			url: '/about'
		},
		{
			title: 'projects/',
			url: '/projects'
		},
		{
			title: 'repos/',
			url: '/repos'
		},
		{
			title: 'blog/',
			url: '/blog'
		}
	];
</script>

<header>
	<!-- <h1><a href="/">title</a></h1> -->
	<div class="menu">
		<ul class="unstyled-list">
			{#each pages as page}
				<li><a href={page.url} class="navbar-link">{page.title}</a></li>
			{/each}
		</ul>
	</div>
</header>
