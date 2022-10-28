const clientSeeds = require("./clientSeed.json");
const vendorSeeds = require("./clientSeed.json");
const itemSeeds = require("./itemSeed.json");
const db = require("../config/connection");
const { Client, Vendor, Item } = require("../models");

db.once("open", async () => {
  try {
    await Client.deleteMany({});
    await Vendor.deleteMany({});
    await Item.deleteMany({});

    await Client.create(clientSeeds);
    await Vendor.create(vendorSeeds);
    await Item.create(itemSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
