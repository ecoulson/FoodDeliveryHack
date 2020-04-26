const mongoose = require("mongoose");
const Location = require("./Location");
const Order = require("./Order");

const ElderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    location: Location.schema,
    order: Order.schema
});

module.exports = mongoose.model("Elder", ElderSchema);