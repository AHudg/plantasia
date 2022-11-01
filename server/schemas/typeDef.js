const { gql } = require("apollo-server-express");
const { signToken } = require("../utils/Authentication");

const typeDefs = gql`
  type Client {
    _id: ID!
    username: String!
    shopName: String!
    email: String!
    vendorList: [Vendor]
  }

  type Vendor {
    _id: ID!
    username: String!
    email: String!
    shopName: String!
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
    vendor: [Vendor]
    
  }

  type Ordered {
    _id: ID
    createdAt: String
    client: Client, 
    vendor: Vendor,
    items: Item
    total: Int
  }

  type clientAuth {
    token: ID!
    client: Client
  }

  type vendorAuth {
    token: ID!
    vendor: Vendor
  }

  type Query {
    clients: [Client]
    client(username: String!): Client
    vendors: [Vendor]
    vendor(username: String!): Vendor
    items (username: String): [Item]
    pastOrders: [Ordered]
    }

  type Mutation {
    loginClient(email: String!, password: String!): clientAuth
    loginVendor(email: String!, password: String!): vendorAuth
    addClient(
      username: String!
      email: String!
      shopName: String!
      password: String!
    ): clientAuth
    addVendor(
      username: String!
      email: String!
      shopName: String!
      password: String!
    ): vendorAuth
    addItem (
      name: String!
      stock: Int!
      price: Int!
    ) : Item
    addVendToClient(vendorId: ID!): Client
  }

`;

module.exports = typeDefs;
