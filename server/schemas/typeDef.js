const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Client {
    _id: ID
    username: String!
    email: String!
  }

  type Vendor {
    _id: ID
    username: String!
    email: String!
    description: String
    phone: Int
  }

  type Item {
    _id: ID
    name: String!
    stock: Int!
    price: Float!
    vendor: Vendor!
  }

  type Query {
    clients: [Client]
    client(username: String!): [Client]
    vendors: [Vendor]
    vendor(username: String!): [Vendor]
    inventory: [Item]
  }
`;

module.exports = typeDefs;
