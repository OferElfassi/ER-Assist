const User = require("../models/user-model");
const HttpError = require("../utils/HttpError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user);
      throw new HttpError("this email is already exists", 401);
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      gender: req.body.gender,
      role: req.body.role,
      organization: req.body.organization,
      isManager: req.body.isManager,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "success", data: newUser });
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new HttpError("User not exists", 401);
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      throw new HttpError("Wrong password", 401);
    }
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      "secretstring"
      // { expiresIn: "2h" }
    );
    res.status(200).json({
      message: "success",
      data: { user: user.toObject({ virtuals: true }), token },
    });
  } catch (e) {
    next(e);
  }
};
