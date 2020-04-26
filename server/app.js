const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();

const DriverRoute = require("./routes/Driver");
const ElderRoute = require("./routes/Elder");
const LocationRoute = require("./routes/Location");
const OrderRoute = require("./routes/Order");
const RestaurantRoute = require("./routes/Restaurant");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", DriverRoute);
app.use("/api", ElderRoute);
app.use("/api", LocationRoute);
app.use("/api", OrderRoute);
app.use("/api", RestaurantRoute);

mongoose.connect("mongodb://localhost:27017/employee", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to database");
    }
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});