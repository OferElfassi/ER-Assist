const User = require("../models/user-model");
const Organization = require("../models/organization-model");
exports.getUsers = async (req, res, next) => {
  try {
    const organizations = await Organization.findById(
      req.params.organizationId
    );
    if (!organizations) {
      throw new Error("cant find this user");
    }
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
