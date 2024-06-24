
export const getCategoryPosts = async (catId, after=null) => {
  const params = {
    query: `
    query GetEvents($catId: ID!, $after: String) {
      category(id: $catId, idType: DATABASE_ID) {
        name
        posts(first: 10, after: $after) {
          edges {
            node {
              title
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
                date
              slug
            }
            cursor
          }
        }
        count
      }
    }
  `, variables: {
     catId,
      after
    },
  };




  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const result = await response.json();
  console.log("RESULT", result)
  const posts = result.data.category.posts.edges;

  // Process posts
  posts.forEach(post => {
    // console.log("NODE TITLE", post.node.title);
  });

  // Update the `after` variable for the next request
  if (posts.length > 0) {
    after = posts[posts.length - 1].cursor;
    // console.log("AFTER", after);
  }
posts.after = after;
posts.name = result.data.category.name;
posts.catId = catId;
  // console.log("POSTNODE", posts[0])

  return posts;
}













