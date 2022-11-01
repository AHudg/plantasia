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
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Ordered = model('Ordered', pastOrderSchema);

module.exports = Ordered; 
 
