export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts/projects`);
	const posts = await response.json();

	return {
		posts
	};
};
