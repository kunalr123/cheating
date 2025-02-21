const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) return res.status(403).json({ error: "No token provided" });

  // Check for Bearer token format
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length); // Remove "Bearer " prefix
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticateToken;
