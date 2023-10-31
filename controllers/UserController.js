const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser != null) {
    res.send("User exists");
  } else {
    const hashPass = await bcrypt.hash(password, 12);
    const user = await User.create({ username: username, password: hashPass });
    res.status(200).json({ user });
  }
};

module.exports = { registerUser };
