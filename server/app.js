const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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