const jwt = require("jsonwebtoken");

const generateToken = (idUser, res) => {
  const token = jwt.sign({ idUser }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    httpOnly: true, 
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

module.exports = { generateToken };
