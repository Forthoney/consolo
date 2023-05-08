export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/tag/${params.tag}`);
	const posts = await response.json();

	return {
		posts,
	};
};
