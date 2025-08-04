const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // secret from .env
    const user = await User.findById(decoded.id).select("username"); // fetch user
    if (!user) return res.status(401).json({ msg: "User not found" });

    req.user = user; // save user for use in routes
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    return res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = authMiddleware;
