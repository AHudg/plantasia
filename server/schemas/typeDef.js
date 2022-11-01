const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Client {
    _id: ID
    username: String!
    shopname: String!
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
    client(username: String!): Client
    vendors: [Vendor]
    vendor(username: String!): Vendor
    inventory: [Item]
  }

  type Mutation{
    login(email: String!, password: String!): Client
    addClient(username: String! email: String!, shopname: String! password: String!): Client
    addVendor(username: String! email: String!, password: String! ): Vendor
  }
`;

module.exports = typeDefs;
