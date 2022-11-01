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

export const QUERY_VENDORS = gql`
  query vendors {
    vendors {
      _id
      username
      email
    }
  }
`;
