const mongoose = require("mongoose");
const FoodItem = require("./FoodItem");
const Restaurant = require("./Restaurant");

const OrderSchema = new mongoose.Schema({
    items: [FoodItem.schema],
    restaurant: mongoose.ObjectId,
    prepared: {
        type: Boolean, 
        default: false,
    }, 
    pickedUp: {
        type: Boolean, 
        default: false,
    }, 
    delivered: {
        type: Boolean,
        default: false,
    },
    orderReceived: {
        type: Boolean, 
        default: false,
    }

});

module.exports = mongoose.model("Order", OrderSchema);