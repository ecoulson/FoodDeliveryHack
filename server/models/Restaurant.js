const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);











module.exports = mongoose.model("Restaurant", Restaurant);