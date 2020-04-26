const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model("FoodItem", FoodItemSchema);