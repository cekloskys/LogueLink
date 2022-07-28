import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import 'localstorage-polyfill';

const URI = 'https://chcmobileapps.ddns.net';
const androidURI = 'http://172.20.224.1:4000/';

const httpLink = createHttpLink({
  uri: URI,
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

/* export const client = new ApolloClient({
  // uri: httpLink,
  link: authLink.concat(httpLink),
  // link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getAllPosts: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
}); */
export const client = new ApolloClient(
  {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            links: {
              //merge: true,
              merge(existing = [], incoming) {
                return incoming;
              },
            },
            tutorials: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
  },
  /* defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
    },*/
);
