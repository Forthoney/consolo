import { json } from '@sveltejs/kit';
import { fetchPosts } from "$lib/utils/fetchPosts";

export const GET = async ({ params }) => {
	// retrieves a list of all posts in tag params.page
	const allPosts = await fetchPosts(params.tag, 'tag');

	// sorts posts by date
	let sortedPosts = allPosts.sort(
		(a, b) => Date.parse(a.metadata.date) - Date.parse(b.metadata.date)
	);

	return json(sortedPosts);
};
