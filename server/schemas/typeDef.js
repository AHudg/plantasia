const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Client {
    _id: ID
    username: String!
    email: String!
    vendorList: [Vendor]
  }

  type Vendor {
    _id: ID
    username: String!
    email: String!
    description: String
    phone: Int
    clientList: [Client]
    inventory: [Item]
  }

  type Item {
    _id: ID
    name: String!
    stock: Int!
    price: Float!
    vendor: Vendor!
  }
`;

module.exports = typeDefs;
