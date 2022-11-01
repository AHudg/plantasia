const { gql } = require("apollo-server-express");
const { signToken } = require('../utils/Authentication');

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
    vendor: [Vendor]
  }

  type Auth {
    token: ID!
    client: Client
  }

  type Query {
    clients: [Client]
    client(username: String!): Client
    vendors: [Vendor]
    vendor(username: String!): Vendor
    items: [Item]
  }

  type Mutation{
    loginClient(email: String!, password: String!): Auth
    loginVendor(email: String!, password: String!): Auth
    addClient(username: String! email: String!, shopname: String! password: String!): Auth
    addVendor(username: String! email: String!, password: String!): Vendor
  }
`;

module.exports = typeDefs;
