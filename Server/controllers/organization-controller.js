const User = require("../models/user-model");
const Organization = require("../models/organization-model");
const HttpError = require("../utils/HttpError");
exports.getUsers = async (req, res, next) => {
  try {
    const organization = await Organization.findById(req.params.organizationId);
    if (!organization) {
      throw new HttpError("cant find this user", 404);
    }
    const users = await organization.populate("users").exec();
    res.status(200).json({ message: "success", data: users });
  } catch (e) {
    next(e);
  }
};
