const jwt = require("jsonwebtoken");
const mongoDBErrorHelper = require("./mongoDBErrorHelper");

const checkIsUserHaveValidJwtToken = async (req, res, next) => {
  try {
    console.log(req.headers);
    console.log(req.headers.authorization);
    res.send("-----");
  } catch (e) {
    res.status(500).json(mongoDBErrorHelper(e));
  }
};

module.exports = {
  checkIsUserHaveValidJwtToken,
};
