// allows us to make request to GraphQL server, made available to the app by <ApolloProvider>
import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS } from "../../utils/queries";
import React from "react";

export default function Profile() {
  // user useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CLIENTS);

  const clients = data?.clients || [];
  console.log(clients);

  return (
    <main>
      <h2>This is some bullshit.</h2>
    </main>
  );
}
