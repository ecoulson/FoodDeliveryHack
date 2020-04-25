const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const User = new mongoose.Schema({});

module.exports = mongoose.model("User", User);