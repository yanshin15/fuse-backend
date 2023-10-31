const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  // const existingUser = await User.findOne({ username });
  const user = await User.create({ username: username, password: password });
  res.send(user);
  // const user = await User.create()
};

module.exports = { registerUser };
