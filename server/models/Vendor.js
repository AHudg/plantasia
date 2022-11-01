const { Schema, model } = require("mongoose");

const vendorSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    // minLength or some password validators to make it strong
  },
  shopName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    trim: true,
  },
  phone: {
    type: Number,
  },
  clientList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Vendor = model("Vendor", vendorSchema);

module.exports = Vendor;
