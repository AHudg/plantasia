const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  //   vendor: {
  //     type: Schema.Types.ObjectId,
  //     ref: "Vendor",
  //   },
});

const Item = model("Item", itemSchema);

module.exports = Item;
