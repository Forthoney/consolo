<script>
	import Header from '$lib/components/Header.svelte';
	import Head from '$lib/components/Head.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Error from '$lib/components/Error.svelte';
	import { page } from '$app/stores';
</script>

<!DOCTYPE html>
<html lang="en">
	<Head />

	<body>
		{#if $page.status == 200}
			<Header />

			<main class="page-content" aria-label="content">
				<div class="wrapper">
					<slot />
				</div>
			</main>

			<Footer />
		{:else}
			<Error />
		{/if}

		<!-- {%- unless layout.override-link-target == true or page.override-link-target == true -%}
      {%- include change-link-target.html -%}
    {%- endunless -%}

    {% include mobile-changes.html %} -->
	</body>
</html>
