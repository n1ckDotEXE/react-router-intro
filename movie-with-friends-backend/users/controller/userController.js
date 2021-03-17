const bcrypt = require("bcryptjs");

const User = require("../Model/User");
const MongoDBErrorHelper = require("../../lib/mongoDBErrorHelper");

module.export = {
	signUp: async (req, res) => {
		try {
			let salted = await bcrypt.genSalt(10);
			let hashedPassword = await bcrypt.hash(req.body.password, salted);
			let createdUser = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hashedPassword,
			});

			let savedUser = await createdUser.save();

			resizeBy.json({
				data: savedUser,
			});
		} catch (e) {
			console.log(e.message);
			res.status(500).json(MongoDBErrorHelper(e));
		}
	},
};
l;
