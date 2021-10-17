const jwt = require("jsonwebtoken");
const userService = require('../services/users.service');
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  var decoded;
  try {
    decoded = jwt.verify(token, 'secret');
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  let flag = false
  userService.login(decoded.data, (error, message)=>{
    if(error){
      flag = true;
    }
  });
  if(flag){
    return res.status(400).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;