const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../Model/User");
const mongoDBErrorHelper = require("../../lib/mongoDBErrorHelper");

module.exports = {
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

      res.json({
        data: savedUser,
      });
    } catch (e) {
      res.status(500).json(mongoDBErrorHelper(e));
      // res.status(500).json({
      //   message: e.message,
      // });
    }
  },
  login: async (req, res) => {
    try {
      let foundUser = await User.findOne({ email: req.body.email });

      if (!foundUser) {
        throw { message: "Email is not registered, please go sign up!" };
      }

      let comparedPassword = await bcrypt.compare(
        req.body.password,
        foundUser.password
      );

      if (!comparedPassword) {
        throw { message: "Check your email and password!" };
      } else {
        let jwtToken = jwt.sign(
          {
            email: foundUser.email,
          },
          "mightyhamster",
          { expiresIn: "1d" }
        );

        res.json({
          jwtToken: jwtToken,
        });
      }
    } catch (e) {
      res.status(500).json(mongoDBErrorHelper(e));
    }
  },
  updateUserPassword: async (req, res) => {
    try {
      let foundUser = await User.findOne({ email: req.body.email });

      let comparedPassword = await bcrypt.compare(
        req.body.oldPassword,
        foundUser.password
      );

      if (!comparedPassword) {
        throw { message: "Cannot update your password, check again" };
      }

      let salted = await bcrypt.genSalt(10);
      let hashedNewPassword = await bcrypt.hash(req.body.newPassword, salted);

      await User.findOneAndUpdate(
        { email: req.body.email },
        { password: hashedNewPassword },
        { new: true }
      );

      res.json({
        message: "success",
        payload: true,
      });
    } catch (e) {
      res.status(500).json(mongoDBErrorHelper(e));
    }
  },
};
