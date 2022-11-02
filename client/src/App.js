import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import { setContext } from '@apollo/client/link/context'

import Header from "./components/Header";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SingleUser from './pages/SingleUser';
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";

// create new link to GraphQL server at /graphql endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

// create instance and connection to API endpoint
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [user, setCurrentUser] = useState("Client");

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-100-vh bg">
          <Header></Header>
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/login"
                element={<Login ></Login>}
              />
              <Route
                path="/signup"
                element={<SignUp ></SignUp>}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/user/:type/:username" element={<SingleUser />} />
              {/* <Route path="/:client/:username" element={<SingleUser />} /> */}
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
