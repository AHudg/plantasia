import { gql } from "@apollo/client";

export const QUERY_CLIENTME = gql`
  query ClientMe {
    clientMe {
      _id
      username
      shopName
      email
      friend {
        _id
      }
    }
  }
`;

export const QUERY_CLIENT = gql`
query client($username: String!) {
  client(username: $username) {
    _id
    shopName
    username
    email
    friend {
      _id
    }
  }
}`

export const QUERY_CLIENTS = gql`
  query clients {
    clients {
      _id
      username
      email
    }
  }
`;

export const QUERY_VENDORME = gql`
query vendorMe {
  vendorMe {
    _id
    username
    email
    description
    shopName
    phone
    friend {
      _id
    }
    inventory {
      _id
    }
  }
}`

export const QUERY_VENDOR = gql`
  query Vendor($username: String!) {
    vendor(username: $username) {
      _id
      username
      email
      shopName
      description
      phone
      friend {
        _id
      }
      inventory {
        _id
      }
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

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      name
      stock
      price
    }
  }
`;
