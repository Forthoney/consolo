import { json } from '@sveltejs/kit';
import { fetchPosts } from "$lib/utils/fetchPosts";

export const GET = async ({ params }) => {
	// retrieves a list of all posts in category params.page
	const allPosts = await fetchPosts(params.category, 'category');

	// sorts posts by date
	let sortedPosts = allPosts.sort(
		(a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date)
	);

	return json(sortedPosts);
};
