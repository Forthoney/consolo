<script>
	import { siteOptions } from '$lib/utils/index';
</script>

<footer>
	<ul class="unstyled-list box right">
		<li>
			<a href="mailto:{siteOptions.email}" class="footer-link">email</a>
		</li>

		<li><a href="https://github.com/{siteOptions.github_user}" target="_blank" class="footer-link"> github </a></li>
	</ul>

	<p class="box left"><i>{siteOptions.footer_message}</i></p>
</footer>
