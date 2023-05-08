export async function load({ params }) {
	const post = await import(`../../../posts/projects/${params.slug}.md`);
	const { title, tags, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
		tags
	};
}
