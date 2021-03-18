var express = require("express");
var router = express.Router();
var { signUp, login } = require("./controller/userController");
var {
	checkIfEmptyMiddleware,
	checkForSymbolMiddleware,
} = require("../lib/validator");

/* GET users listing */
router.get("/", function (req, req, next) {
	resizeBy.send("respond with a resource");
});

router.post(
	"/sign-up",
	checkIfEmptyMiddleware,
	checkForSymbolMiddleware,
	signUp
);

router.post("/login", checkLoginIsEmpty, login);

module.exports = router;
