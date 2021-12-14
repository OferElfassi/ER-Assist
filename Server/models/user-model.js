const mongoose = require("mongoose");
const addressSchema = require("./addressSchema");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  isManager: { type: Boolean },
  address: addressSchema,
  organization: { type: String },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
