import React from "react";
// ApolloProvider is a React component that is used to provide data to all other components
// ApolloClient is a constructor function that will help initialize the connecttion to the GraphQL API server
// InMemoryCache enables Apollo Client instance to cache API response data to perform request efficiently
// createHttpLink allows control of how the Apollo Client makes a request. (Middleware for outbound network request)
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
} from "@apollo/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";

// create new link to GraphQL server at /graphql endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

// create instance and connection to API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header></Header>
        <div>
          <Profile></Profile>
        </div>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
