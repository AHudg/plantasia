const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  shopname: {
    type: String, 
    require: true, 
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    // match: [regex expression, 'Must match a valid email address.']
  },
  password: {
    type: String,
    require: true,
    // minLength or some password validators to make it strong
  },
  description: {
    type: String,
    trim: true,
  },
  phone: {
    type: Number,
  },
    vendorList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Vendor",
      },
    ],
    past: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
});

const Client = model("Client", clientSchema);

module.exports = Client;
