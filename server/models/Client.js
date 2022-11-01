const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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
   match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    require: true,
    minlength: 8
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

clientSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});


clientSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const Client = model("Client", clientSchema);

module.exports = Client;
