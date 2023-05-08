export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts/blog`);
	const posts = await response.json();

	return {
		posts
	};
};
