const { Client, Vendor, Item, Ordered, Friend } = require("../models");

const { signToken } = require("../utils/authentication");
// authetication error if username or password is wrong
const { AuthenticationError } = require("apollo-server-express");
const { findByIdAndUpdate } = require("../models/Ordered");

const resolvers = {
  Query: {
    clientMe: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const clientData = await Client.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("friend");
        return clientData;
      }
      throw new AuthenticationError("Not logged in");
    },
    vendorMe: async (parent, args, context) => {
      if (context.user) {
        const vendorData = await Vendor.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("friend");

        return vendorData;
      }
    },
    // friends: async (parent, args, contect) => {
    //   if (context.user) {
    //     const friendData = await Friend.find()
    //   }
    // }
    // used to query all clients - used to populate vendor's client list
    clients: async () => {
      return Client.find({}).populate("friend");
    },
    // used to query specific client - used for vendor clicking on his client's profile from client list
    client: async (parent, { username }) => {
      return Client.findOne({ username })
        .select("-_v -password")
        .populate("friend");
    },

    // used to query all vendors - used for clients to look at all potential vendors
    vendors: async () => {
      return Vendor.find().populate("inventory").populate("friend");
    },
    // used to query one vendor - used by clients that click on specific vendor profile and access inventory
    vendor: async (parent, { username }) => {
      return Vendor.findOne({ username })
        .select("-_v -password")
        .populate("friend")
        .populate("inventory");
    },
    // used to query all items at the moment - somehow needs to search by vendor id to return their inventory
    items: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Item.find(params).populate("vendor");
    },

    pastOrders: async () => {
      return Ordered.find({});
    },

    clientFriend: async (parent, arg, context) => {
      if (context.user) {
        return Friend.find({ vendor: context.user.username });
      }
    },

    vendorFriend: async (parent, arg, context) => {
      if (context.user) {
        return Friend.find({ vendor: context.user.username });
      }
    },

    friends: async () => {
      return Friend.find({});
    },
  },
  Mutation: {
    addClient: async (parent, args) => {
      const client = await Client.create(args);
      client.type = "Client";
      const token = signToken(client);

      return { token, client };
    },
    addVendor: async (parent, args) => {
      const vendor = await Vendor.create(args);
      vendor.type = "Vendor";
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
      client.type = "Client";
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
      vendor.type = "Vendor";
      const token = signToken(vendor);
      return { token, vendor };
    },

    editClient: async (parent, args, context) => {
      if (context.user) {
        const newClient = await Client.findByIdAndUpdate(
          { _id: context.user._id },
          {
            shopName: args.shopName,
            description: args.description,
            phone: args.phone,
          },
          { new: true }
        );
        return newClient;
      }
    },

    editVendor: async (parent, args, context) => {
      if (context.user) {
        const newVendor = await Vendor.findByIdAndUpdate(
          { _id: context.user._id },
          {
            shopName: args.shopName,
            description: args.description,
            phone: args.phone,
          },
          { new: true }
        );
        return newVendor;
      }
    },

    deleteClient: async (parent, args, context) => {
      if (context.user) {
        await Client.findByIdAndDelete(
          { _id: context.user._id }
          // TODO what else should go here
        );
      }
    },
    deleteVendor: async (parent, args, context) => {
      if (context.user) {
        await Vendor.findByIdAndDelete(
          { _id: context.user._id }
          // TODO what else should go here
        );
      }
    },

    addItem: async (parent, args, context) => {
      if (context.user) {
        const item = await Item.create({ ...args, vendor: context.user._id });

        await Vendor.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { inventory: item._id } },
          { new: true }
        );
        return item;
      }
      throw new AuthenticationError("Not logged in");
    },
    // TODO: Old add to friends type code.
    //   addVendToClient: async (parent, { vendorId }, context) => {
    //     console.log(vendorId);

    //     if (context.user) {
    //       const updateVendorList = await Client.findByIdAndUpdate(
    //         { _id: context.user._id },
    //         { $addToSet: { vendorList: vendorId } },
    //         { new: true }
    //       ).populate("vendorList");

    //       console.log(updateVendorList);

    //       return updateVendorList;
    //     }
    //     throw new AuthenticationError("You need to be logged in!");
    // },
    // Vendor is adding a client as friend
    addClientFriend: async (parent, { client }, context) => {
      if (context.user) {
        const friendship = {
          client: client,
          vendor: context.user.username,
          status: 2,
        };
        const updateFriendship = await Friend.create(friendship);

        await Vendor.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friend: updateFriendship._id } },
          { new: true }
        );

        await Client.findOneAndUpdate(
          { username: client },
          { $addToSet: { friend: updateFriendship._id } },
          { new: true }
        );
        return updateFriendship;
      }
      throw new AuthenticationError("Not logged in");
    },
    // client is adding vendor as friend
    addVendorFriend: async (parent, { vendor }, context) => {
      if (context.user) {
        const friendship = {
          client: context.user._id,
          vendor: vendor,
          status: 1,
        };
        const updateFriendship = await Friend.create(friendship);

        await Client.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friend: updateFriendship._id } },
          { new: true }
        );

        await Vendor.findByIdAndUpdate(
          { _id: vendor },
          { $addToSet: { friend: updateFriendship._id } },
          { new: true }
        );
        return updateFriendship;
      }
      throw new AuthenticationError("Not logged in");
    },

    acceptFriendReq: async (parent, { friendship }, context) => {
      if (context.user) {
        return await Friend.findByIdAndUpdate(
          { _id: friendship },
          { status: 0 },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in");
    },
    deleteFriendReq: async (parent, { friendship }, context) => {
      if (context.user) {
        return await Friend.findByIdAndDelete({ _id: friendship });
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
