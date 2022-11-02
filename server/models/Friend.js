const { Schema, model } = require("mongoose");

const friendSchema = new Schema({
  client: {
    type: String,
    require: true,
  },
  vendor: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

const Friend = model("Friend", friendSchema);

module.exports = Friend;
