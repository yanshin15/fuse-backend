const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/UserController");

router.get("/register", registerUser);
router.post("/login");

module.exports = router;
