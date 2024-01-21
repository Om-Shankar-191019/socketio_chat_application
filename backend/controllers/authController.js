const User = require("../models/User");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    let msg;
    if (error.code === 11000) {
      msg = "User already exist";
    } else {
      msg = error.message;
    }
    console.log(error);
    res.status(400).json(msg);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("invalid email or password");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("invalid credentials");

    user.status = "online";
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  signup,
  login,
};
