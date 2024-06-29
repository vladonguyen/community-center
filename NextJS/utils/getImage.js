export const getImage = async (uri) => {
 
    const params = {
      query: `
        query GetImage($uri: ID!) {
          mediaItem(id: $uri, idType: SOURCE_URL) {
            id
            title
            width
            height
          }
        }
      `,
      variables: {
        uri,
      },
    };
  
    try {
      const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(params),
      });
  
      if (!response.ok) {
        // console.error('Network response was not ok', response);
        return null;
      }
  
      const result = await response.json();
  
      if (result.errors) {
        // console.error('GraphQL errors:', result.errors);
        return null;
      }
  
      const { data } = result;
      // console.log("FIND DATA", data, "END DATA");
  
      if (!data || !data.mediaItem) {
        console.warn('No media item found');
        return null;
      }
  
      return {
        id: data.mediaItem.id || "",
        title: data.mediaItem.title || "",
        width: data.mediaItem.width || 0,
        height: data.mediaItem.height || 0,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  