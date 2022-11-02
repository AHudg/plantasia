const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
  friend: [
    {
      type: Schema.Types.ObjectId,
      ref: "Friend",
    },
  ],
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

vendorSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

vendorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Vendor = model("Vendor", vendorSchema);

module.exports = Vendor;
