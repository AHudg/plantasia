const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// todo: create better date format later. this is from the module as a placeholder
// also determine what data we want to populate with this, items, price, quantity etc. 

const pastOrderSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateformat(timestamp)
        },
        clientName: {
            type: String,
            ref: 'Client'
        },
        vendorName: {
            type: String,
            ref: 'Vendor'
        },
        // TODO: will this get me quantity, price etc?
        items: {
            type: Schema.Types.ObjectId,
            ref: 'Items'
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Ordered = model('Ordered', pastOrderSchema);

module.exports = Ordered; 
 
