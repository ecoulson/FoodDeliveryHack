const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    address: String,
    latitude: Number,
    longitude: Number

});

module.exports = mongoose.model("Location", LocationSchema);