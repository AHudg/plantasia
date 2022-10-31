import { gql } from "@apollo/client";

export const QUERY_CLIENTS = gql`
  query clients {
    clients {
      _id
      username
      email
    }
  }
`;
