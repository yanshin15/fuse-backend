require("dotenv").config();
const dotenv = process.env;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserRoutes = require("./routes/UserRoutes");

app.use(express.json());
app.use("/api", UserRoutes);

app.listen(dotenv.PORT, () => {
  console.log(`Listening on PORT: ${dotenv.PORT}`);
});
mongoose.connect(dotenv.URI).then(() => {
  console.log("MongoDB connected.");
});
