import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
  const params = {
    query: `
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
        __typename
          ... on Page {
           title
            date
            blocksJSON
            blocks {
              ... on CoreLatestPostsBlock {
                dynamicContent
              }
              ... on CoreVideoBlock {
                originalContent
              }
            }
          }
          ... on Post {
            id
            title
            date
            blocks {
              ... on CoreLatestPostsBlock {
                dynamicContent
              }
              ... on CoreVideoBlock {
                originalContent
              }
            }
            blocksJSON
            categories {
        edges {
          node {
            categoryId
          }
        }
      }
          }
          
        }

      }
    `,
    variables: {
      uri,
    },
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(params)
  });

  const { data } = await response.json();
  if (!data.nodeByUri) {
    return null;
  }

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  const categories = data?.nodeByUri?.categories?.edges?.map(edge => edge.node.categoryId) || [];

  return {
    props: {
      blocks,
      propertyFeatures: data.nodeByUri.propertyFeatures || null,
      title: data.nodeByUri.title || "",
      date: data.nodeByUri.date || "",
      __typename: data.nodeByUri.__typename,
      categoryIdPost: categories[0],

    },
  };

}