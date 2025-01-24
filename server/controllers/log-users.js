const User = require('../models/user-model');

const logAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log("All Users:", users);
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    next(error);
  }
};

module.exports = logAllUsers;
