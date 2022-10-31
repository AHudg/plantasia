const clientSeeds = require("./clientSeed.json");
const vendorSeeds = require("./vendorSeed.json");
const itemSeeds = require("./itemSeed.json");
const db = require("../config/connection");
const { Client, Vendor, Item } = require("../models");

db.once("open", async () => {
  try {
    await Client.deleteMany({});
    // await Vendor.deleteMany({});
    // await Item.deleteMany({});

    const clientSeed = [
      {
        username: "Meg Thomas",
        email: "quickandquiet@dbd.com",
        password: "trytosurvive",
      },
      {
        username: "Jonah Vasquez",
        email: "correctiveaction@dbd.com",
        password: "trytosurvive",
      },
      {
        username: "Elodie Rakoto",
        email: "deception@dbd.com",
        password: "trytosurvive",
      },
      {
        username: "Dwight Fairfield",
        email: "provethyself@dbd.com",
        password: "trytosurvive",
      },
    ];

    await Client.insertMany(clientSeed);
    // await Vendor.insertMany(vendorSeeds);
    // await Item.insertMany(itemSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
