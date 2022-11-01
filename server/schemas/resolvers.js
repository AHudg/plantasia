const { Client, Vendor, Item } = require("../models");

const { signToken } = require("../utils/Authentication");
// authetication error if username or password is wrong
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    // used to query all clients - used to populate vendor's client list
    clients: async () => {
      return Client.find({});
    },
    // used to query specific client - used for vendor clicking on his client's profile from client list
    client: async (parent, { username }) => {
      return Client.findOne({ username });
    },
    // used to query all vendors - used for clients to look at all potential vendors
    vendors: async () => {
      return Vendor.find()
        .populate('inventory');
    },
    // used to query one vendor - used by clients that click on specific vendor profile and access inventory
    vendor: async (parent, { username }) => {
      return Vendor.findOne({ username });
    },
    // used to query all items at the moment - somehow needs to search by vendor id to return their inventory
    items: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Item.find(params).populate('vendor');
    },
  },
  Mutation: {
    addClient: async (parent, args) => {
      const client = await Client.create(args);
      const token = signToken(client);

      return { token, client };
    },
    addVendor: async (parent, args) => {
      const vendor = await Vendor.create(args);
      const token = signToken(vendor);

      return { token, vendor };
    },

    loginClient: async (parent, { email, password }) => {
      const client = await Client.findOne({ email });

      if (!client) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPassword = await client.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(client);
      return { token, client };
    },
    loginVendor: async (parent, { email, password }) => {
      const vendor = await Vendor.findOne({ email });

      if (!vendor) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPassword = await vendor.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(vendor);
      return { token, vendor };
    },

    addItem: async (parent, args, context) => {
      console.log('args', args)
      console.log('user logged on', context.user)
      if (context.user) {
        const item = await Item.create(
          { ...args, vendor: context.user._id })
        
        console.log(item)
        
        const vendor = await Vendor.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { inventory: item._id } },
          { new: true }
        );

        console.log(vendor)
        
        return item;
      }
    },
      addVendToClient: async (parent, { vendorId }, context) => {
        console.log(vendorId);
  
        if (context.user) {
          const updateVendorList = await Client.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { vendorList: vendorId } },
            { new: true }
          ).populate("vendorList");
  
          console.log(updateVendorList);
  
          return updateVendorList;
        }
        throw new AuthenticationError("You need to be logged in!");
    },
      
  }
}

module.exports = resolvers;
