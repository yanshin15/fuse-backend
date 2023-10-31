const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser != null) {
    res.status(400).json("Username is already taken.");
  } else {
    const hashPass = await bcrypt.hash(password, 12);
    const user = await User.create({ username: username, password: hashPass });
    res.status(200).json({ user });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser != null) {
    const checkPass = await bcrypt.compare(password, existingUser.password);
    if (checkPass) {
      existingUser.status = "in";
      res.status(200).json({ existingUser });
    } else {
      res.status(400).json("Incorrect username / password.");
    }
  } else {
    res.status(404).json("No user found.");
  }
};

module.exports = { registerUser, loginUser };
