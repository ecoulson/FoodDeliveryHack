const mongoose = require("mongoose");
const Location = require("./Location");
const FoodItem = require("./FoodItem");

const HoursSchema = new mongoose.Schema({
    breakfast: [String],
    lunch: [String],
    dinner: [String]
});

const RestaurantSchema = new mongoose.Schema({
    name: String,
    menu: [FoodItem.schema],
    location: Location.schema,
    hours: HoursSchema
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);