import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { API_URL } from '../utils/consts';
import { createMockFetch } from '@apollo/client/testing/core/mocking/mockFetch';

const apolloLink = createHttpLink({
  uri: API_URL,
  fetch: createMockFetch()
});

// apolloProps
const props = {
  link: apolloLink,
  ssrMode: !process.browser,
  cache: new  InMemoryCache()
}
const apolloClient = new ApolloClient(props);

export default apolloClient;