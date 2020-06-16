const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const mongoURI = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected successfully to the mongodb server");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
