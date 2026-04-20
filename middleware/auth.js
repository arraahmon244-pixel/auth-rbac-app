const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const header = req.header("Authorization");

  if (!header) return res.status(401).send("Access Denied");

  const token = header.split(" ")[1]; // 🔥 remove "Bearer"

  if (!token) return res.status(401).send("No token");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err); // 👈 helps debug
    res.status(400).send("Invalid Token");
  }
};
