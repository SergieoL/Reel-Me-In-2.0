import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../src/index.css';

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
import Login from './pages/Login';
import SingleReview from './pages/SingleReview';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import NewReview from './pages/NewReview';


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
      <Router>
        <div className="bg-warning">
          <Header />
          <div className="">
          <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route path="/profile">
                  <Route path=":username" element={<Profile />} />
                  <Route path="" element={<Profile />} />
                </Route>
                <Route
                  path="/review/:id"
                  element={<SingleReview />}
                />
              <Route
                path='newreview'
                element={<NewReview />}
              />
              <Route
                path='*'
                element={<NoMatch />}
              />
              </Routes>
              <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
