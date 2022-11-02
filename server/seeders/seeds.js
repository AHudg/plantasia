const clientSeeds = require("./clientSeed.json");
const vendorSeeds = require("./vendorSeed.json");
const itemSeeds = require("./itemSeed.json");
const orderSeeds = require("./orderSeed.json");
const db = require("../config/connection");
const { Client, Vendor, Item, Ordered, Friend } = require("../models");

db.once("open", async () => {
  try {
    await Client.deleteMany({});
    await Vendor.deleteMany({});
    await Item.deleteMany({});
    await Ordered.deleteMany({});
    await Friend.deleteMany({});

    await Client.insertMany(clientSeeds);
    await Vendor.insertMany(vendorSeeds);
    await Item.insertMany(itemSeeds);
    await Ordered.insertMany(orderSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
