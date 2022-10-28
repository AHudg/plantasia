const { Client, Vendor, Item } = require("../models");

const resolvers = {
  Query: {
    // used to query all clients - used to populate vendor's client list
    clients: async () => {
      return Client.find();
    },
    // used to query specific client - used for vendor clicking on his client's profile from client list
    client: async (parent, { username }) => {
      return Client.findOne({ username });
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
};

module.export = resolvers;
