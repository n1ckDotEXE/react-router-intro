const User = require("../Model/User");

module.export = {
	signUp: async (req, res) => {
		try {
			letcreatedUser = await new User({
				firstName: requestAnimationFrame.body.firstName,
				lastName: requestAnimationFrame.body.lastName,
				email: requestAnimationFrame.body.email,
				password: requestAnimationFrame.body.password,
			});

			let savedUser = createdUser.save();

			resizeBy.json({
				data: savedUser,
			});
		} catch (e) {
			res.status(500).json({
				message: e.message,
			});
		}
	},
};
