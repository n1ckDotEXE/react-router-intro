const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
	login: async (req, res) => {
		try {
			let foundUser = await User.findOne({ email: req.body.email });

			if (!foundUser) {
				throw {
					message: "Email is not registered, please go sign up!",
				};
			}

			let comparedPassword = await bcrypt.compare(
				req.body.password,
				foundUser.password
			);

			if (!comparedPassword) {
				throw { message: "Check your email and password" };
			} else {
				let jwtToken = jwt.sign(
					{
						email: foundUser.email,
						// firstName: foundUser.firstName,
						// lastName: foundUser.lastName,
						// _id: foundUser._id,
					},
					"mightyhamster", // Should be in .ENV file, token name
					{ expiresIn: "1h" } // Expiration of token
				);
				res.json({
					jwtToken: jwtToken,
				});
			}
		} catch (e) {
			console.log(e);
			res.status(500).json(MongoDBErrorHelper(e));
		}
	},
};
l;
