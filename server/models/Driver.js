const mongoose = require("mongoose");
const Location = require("./Location");
const Order = require("./Order");

const DriverSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String, 
    licensePlate: String,
    location: Location.schema,
    orders: [Order.schema] 
});

module.exports = mongoose.model("Driver", DriverSchema);