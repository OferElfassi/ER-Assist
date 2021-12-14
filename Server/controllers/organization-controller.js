const User = require("../models/user-model");
const Organization = require("../models/organization-model");
const HttpError = require("../utils/HttpError");
exports.getUsers = async (req, res, next) => {
  try {
    const organizations = await Organization.findById(
      req.params.organizationId
    );
    if (!organizations) {
      throw new HttpError("cant find this user", 404);
    }
    res.status(200).json({});
  } catch (e) {
    next(e);
  }
};
