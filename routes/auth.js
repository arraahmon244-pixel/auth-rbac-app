const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/role");

// REGISTER
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: hashedPassword,
    role: role || "user"
  });

  await user.save();
  res.send("User registered successfully");
});

// LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send("Wrong password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

// USER DASHBOARD (protected)
router.get("/dashboard", auth, (req, res) => {
  res.send("Welcome User 👋");
});

// ADMIN ONLY ROUTE
router.get("/admin", auth, checkRole("admin"), (req, res) => {
  res.send("Welcome Admin 🔥");
});

module.exports = router;
