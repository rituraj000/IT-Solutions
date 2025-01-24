const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home logic
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the page using controller");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

// Registration logic
const register = async (req, res, next) => {
  try {
    console.log(req.body);

    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email Already Exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    const token = userCreated.generateToken();
    console.log("Generated Token during registration:", token);

    res.status(201).json({
      msg: "Registration Successful",
      token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    next(error); // Pass error to middleware
  }
};

// Login logic
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await userExist.comparePassword(password);

    if (isMatch) {
      const token = await userExist.generateToken();
      console.log("Generated Token during login:", token);

      res.status(200).json({
        msg: "LogIn Successful",
        token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    console.error(error); // Log error for debugging
    next(error); // Pass error to middleware
  }
};

// User Logic --> When a user is logged in, his data will show to frontend
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log("User Data from Controller:", userData);
    return res.status(200).json(userData); // Return user data directly
  } catch (error) {
    console.log(`Error from user route ${error}`);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { home, register, login, user };
