const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");

const userController = require("../controllers/user");

router.get("/", verifyToken, userController.getUserData);

module.exports = router;
