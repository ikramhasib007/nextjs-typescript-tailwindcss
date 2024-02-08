import { ApolloClient, ApolloLink, from, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { onError } from "@apollo/client/link/error";
import { cache } from "@/stores/cache"
import { typeDefs } from '@/stores/schema'
import resolvers from '@/stores/resolvers'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations, undefined, 2)}, Path: ${JSON.stringify(path, undefined, 2)}`,
      )
    );
    if (networkError) console.log(`[Network error]: ${JSON.stringify(networkError, undefined, 2)}`);
});

const consoleLink = new ApolloLink((operation, forward) => {
  console.log(`starting request for ${operation.operationName}`);
  return forward(operation).map((data) => {
    console.log(`ending request for ${operation.operationName}`);
    return data;
  })
})

const httpLink = (token?: string) => createUploadLink({
  // uri: publicRuntimeConfig.API_PATH,
  uri: "http://localhost:3001/graphql",
  fetch: (uri, options) => {
    const headers = options?.headers ? new Headers(options.headers) : new Headers();
    if (token) headers.set('Authorization', `Bearer ${token}`);
    if (!headers.get('User-Agent')) {
      headers.set('User-Agent', 'USERAGENT');
    }
    options!.headers = headers;
    return fetch(uri, options);
  }
})

const wsLink = (token?: string) => new GraphQLWsLink(createClient({
  url: 'ws://localhost:3001/subscriptions',
  lazyCloseTimeout: 30000,
  retryAttempts: 3,
  connectionParams() {
    if(token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    }
  },
}));

const splitLink = (token?: string) => process.browser ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink(token),
  httpLink(token)
) : httpLink(token)

const getClient = (token?: string) => new ApolloClient({
  cache,
  link: from([errorLink, consoleLink, splitLink(token)]),
  typeDefs,
  // @ts-expect-error
  resolvers,
  connectToDevTools: process.env.NODE_ENV !== 'production',
  name: 'odo-client',
  version: '1.0.0',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  }
})

export default getClient