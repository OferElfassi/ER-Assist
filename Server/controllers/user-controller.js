const User = require("../models/user-model");
const Organization = require("../models/organization-model");
const HttpError = require("../utils/HttpError");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users) {
      throw new HttpError("cant find users", 404);
    }
    res.status(200).json({ message: "success", data: users });
  } catch (e) {
    next(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      throw new HttpError("cant find user", 404);
    }
    res.status(200).json({ message: "success", data: user });
  } catch (e) {
    next(e);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    // if (!req.user.isManager || !req.user._id === req.params.userId) {
    //   throw new HttpError("Unauthorized", 401);
    // }
    console.log(req.params);
    await User.deleteOne({ _id: req.params.userId });
    res.status(200).json({ message: "success", data: null });
  } catch (e) {
    next(e);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    if (!req.user._id === req.params.userId) {
      throw new HttpError("Unauthorized", 401);
    }
    const user = req.user;
    Object.assign(user, req.body);
    await user.save();
    res.status(200).json({ message: "success", data: user });
  } catch (e) {
    next(e);
  }
};
