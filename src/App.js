import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomePage from './components/pages/HomePage';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta2',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}