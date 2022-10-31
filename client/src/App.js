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
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

import "bootstrap/dist/css/bootstrap.min.css";

// create new link to GraphQL server at /graphql endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// create instance and connection to API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh">
          <Header></Header>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
