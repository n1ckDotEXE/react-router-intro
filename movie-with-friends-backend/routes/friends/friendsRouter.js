var express = require("express");
var router = express.Router();
const { createFriend } = require("./controller/friendsController");
const { checkIsUserHaveValidJwtToken } = require("../lib/authChecker");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send("This is friend path");
});

router.post("/create-friend", checkIsUserHaveValidJwtToken, createFriend);

module.exports = router;
