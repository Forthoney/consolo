/**
 * Retrieves a list of all posts within a certain category.
 * @param filter A string with the keyword to filter by.
 * @param type A string to specify how to filter posts.
 * @returns An array containing all the posts in a category as an object.
 */
export const fetchPosts = async function (filter: string, type: string) {
	const allPostFiles = import.meta.glob('/src/posts/**/*.md');
	const allPosts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
				.catch((reason) => { console.log(reason); });
			const relativePath = path.slice(11, -3);

			return {
				path: relativePath,
				metadata: metadata
			}
		})
	)

	const filteredPosts = allPosts.filter(function( post ) {
		switch (type) {
			case 'category':
				return (post.path.indexOf(filter) == -1) ? false : true;
			case 'tag':
				return (post.metadata.tags.includes(filter)) ? true : false;
		}

		if (post !== undefined) {
			return true;
		}

		return true;
	});

	return filteredPosts;
}
