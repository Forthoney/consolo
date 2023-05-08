export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts/repos`);
	const posts = await response.json();

	return {
		posts
	};
};
