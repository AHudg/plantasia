const { Client, Vendor, Item } = require("../models");

const { signToken } = require('../utils/authentication');
// authetication error if username or password is wrong
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // used to query all clients - used to populate vendor's client list
    clients: async () => {
      return Client.find({})
    },
    // used to query specific client - used for vendor clicking on his client's profile from client list
    client: async (parent, { username }) => {
      return Client.findOne({ username })
       
    },
    // used to query all vendors - used for clients to look at all potential vendors
    vendors: async () => {
      return Vendor.find();
    },
    // used to query one vendor - used by clients that click on specific vendor profile and access inventory
    vendor: async (parent, { username }) => {
      return Vendor.findOne({ username });
    },
    // used to query all items at the moment - somehow needs to search by vendor id to return their inventory
    inventory: async () => {
      return Item.find();
    },
  },
  Mutation: {
    addClient: async (parent, args) => {
      const client = await Client.create(args);

      return client; 
    },
    addVendor: async (parent, args) => {
      const vendor = await Vendor.create(args);

      return vendor; 
    },

    // TODO: 
    login: async (parent, {email, password}) => {
      const client = await Client.findOne({ email });

      if (!client) {
        throw new AuthenticationError('Incorrect Login Credentials');
      };

      const correctPassword = await client.isCorrectPassword({ password });

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Login Credentials');
      };

      const token = signToken(client);

      return {token, client};
    }
  }


};

module.exports = resolvers;
