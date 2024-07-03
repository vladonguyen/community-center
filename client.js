import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "http://investproperty.local/graphql",

  uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
