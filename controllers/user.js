const User = require("../models/user");

const getUserData = async (req, res, next) => {
  try {
    const userData = await User.findById(req.userId);
    res.json({ name: userData.name, email: userData.email });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserData };
