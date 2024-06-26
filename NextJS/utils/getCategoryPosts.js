export const getCategoryPosts = async (catId, after = null, eventTime = null) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();

  let dateQuery = "";
  if (catId === 5) {
    if (eventTime === "future") {
      dateQuery = "after: { day: $day, month: $month, year: $year }";
    } else if (eventTime === "past") {
      dateQuery = "before: { day: $day, month: $month, year: $year }";
    }
  }

  const query = `
    query GetEvents($catId: ID!, $after: String${dateQuery ? ", $day: Int!, $month: Int!, $year: Int!" : ""}) {
      category(id: $catId, idType: DATABASE_ID) {
        name
        posts(first: 10, after: $after, where: { dateQuery: { ${dateQuery} } }) {
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
  `;

  const variables = { catId, after, ...(dateQuery && { day, month, year }) };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json();
  const posts = result.data.category.posts.edges;

  if (posts.length > 0) {
    after = posts[posts.length - 1].cursor;
  }

  posts.after = after;
  posts.name = result.data.category.name;
  posts.catId = catId;
  posts.eventTime = eventTime;

  return posts;
}
