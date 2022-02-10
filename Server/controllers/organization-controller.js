const User = require("../models/user-model");
const Organization = require("../models/organization-model");
const HttpError = require("../utils/HttpError");

exports.getOrganizations = async (req, res, next) => {
  try {
    const organizations = await Organization.find({});
    if (!organizations) {
      throw new HttpError("cant find organizations", 404);
    }
    res.status(200).json({ message: "success", data: organizations });
  } catch (e) {
    next(e);
  }
};

exports.addOrganization = async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.address) {
      throw new HttpError("missing organization parameters", 422);
    }
    const organization = new Organization({
      name: req.body.name,
      address: req.body.address,
    });
    await organization.save();

    res.status(200).json({ message: "success", data: organization });
  } catch (e) {
    next(e);
  }
};
