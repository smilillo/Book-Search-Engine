// TODO: Create an Apollo Provider to make every request work with the Apollo server

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Apollo
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// // Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route 
              path='/' 
              component={<SearchBooks />} 
            />
            <Route 
              path='/saved' 
              component={<SavedBooks />} 
            />
            <Route 
              path='*'
              component={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
