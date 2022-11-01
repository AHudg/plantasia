const { Schema, model } = require("mongoose");


const friendSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    status: {
        type: Number,
        required: true
    }

});


const Friend = model("Friend", friendSchema);

module.exports = Friend;
