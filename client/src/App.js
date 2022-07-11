import React from 'react';

// import apollo to connect to db
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

// imort page components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';


// create link to back-end db
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <Header />
        <div className="">
          <Home />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
