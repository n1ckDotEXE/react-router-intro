const Friend = require("../model/Friend");
const User = require("../../users/Model/User");
const mongoDBErrorHelper = require("../../lib/mongoDBErrorHelper");

const createFriend = async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, nickName } = req.body;

    const newFriend = new Friend({
      firstName,
      lastName,
      mobileNumber,
      nickName,
    });

    const savedNewFriend = await newFriend.save();

    const targetUser = await User.findOne({ email: "1@1.com" });

    targetUser.friends.push(savedNewFriend._id);

    await targetUser.save();

    res.json(targetUser);
  } catch (e) {
    res.status(500).json(mongoDBErrorHelper(e));
  }
};

module.exports = {
  createFriend,
};
