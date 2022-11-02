const { gql } = require("apollo-server-express");
const { signToken } = require("../utils/Authentication");

const typeDefs = gql`
  type Client {
    _id: ID!
    username: String!
    shopName: String!
    description: String
    phone: String!
    email: String!
    friend: [Friend]
  }

  type Vendor {
    _id: ID!
    username: String!
    email: String!
    shopName: String!
    description: String
    phone: String
    friend: [Friend]
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
    client: Client
    vendor: Vendor
    items: Item
    total: Int
  }

  type Friend {
    _id: ID
    client: String
    vendor: String
    status: Int!
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
    clientMe: Client
    vendorMe: Vendor

    clients: [Client]
    vendors: [Vendor]

    client(username: String!): Client
    vendor(username: String!): Vendor

    clientFriend: [Friend]
    vendorFriend: [Friend]
    friends: [Friend]

    items(username: String): [Item]
    pastOrders: [Ordered]
  }

  type Mutation {
    addClient(
      username: String!
      password: String!
      shopName: String!
      description: String
      phone: String
      email: String!
    ): clientAuth
    addVendor(
      username: String!
      password: String!
      shopName: String!
      description: String
      phone: String
      email: String!
    ): vendorAuth

    loginClient(email: String!, password: String!): clientAuth
    loginVendor(email: String!, password: String!): vendorAuth

    editClient(shopName: String!, description: String, phone: String): Client
    editVendor(shopName: String!, description: String, phone: String): Vendor

    deleteClient: [Client]
    deleteVendor: [Vendor]

    addClientFriend(client: String!): Friend
    addVendorFriend(vendor: String!): Friend

    acceptFriendReq(friendship: ID!): Friend
    deleteFriendReq(friendship: ID!): Friend

    addItem(name: String!, stock: Int!, price: Int!): Item
    addVendToClient(vendorId: ID!): Client
  }
`;

module.exports = typeDefs;
