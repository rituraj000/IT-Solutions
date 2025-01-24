const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ msg: 'Unauthorized HTTP, Token not provided' });
  }

  const jwtToken = token.replace('Bearer', '').trim();
  console.log("JWT Token:", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findById(isVerified.id).select({ password: 0 });
    console.log("User Data from Auth Middleware:", userData);

    if (!userData) {
      console.log("User not found in database");
      return res.status(404).json({ msg: 'User not found' });
    }

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ msg: 'Unauthorized HTTP, Token not valid' });
  }
};

module.exports = authMiddleware;