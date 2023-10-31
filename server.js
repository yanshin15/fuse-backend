require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dotenv = process.env;

app.listen(dotenv.PORT, () => {
  console.log(`Listening on PORT: ${dotenv.PORT}`);
});
mongoose.connect(dotenv.URI).then(() => {
  console.log("MongoDB connected.");
});
