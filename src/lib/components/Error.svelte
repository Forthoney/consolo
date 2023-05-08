<script>
	import { page } from '$app/stores';
</script>

<body class="error-body">
	<main class="page-content error-content" aria-label="content">
		<div class="wrapper error-wrapper">
			<span class="error-header">ERROR {$page.status}</span><br />

			A fatal exception has occurred at <span class="current-page-url">{$page.url.pathname}</span>
			with error message: {$page.error.message}. Ensure that the link was entered correctly and
			submit issues via <a href="mailto:justin@bustinbung.com" target="_blank">email</a> or
			<a href="https://github.com/bustinbung/bustinbung.com/issues" target="_blank">GitHub</a>.
			<br /><br />
			* Click "Home" to return to the home page.<br />
			* Click "Back" to go to the previous page.<br /><br />

			<span class="error-links">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="/">Home</a> | <a href="javascript:history.back()">Back</a>
			</span>
		</div>
	</main>
</body>
