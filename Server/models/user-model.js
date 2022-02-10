const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  role: { type: String },
  isManager: { type: Boolean },
  address: { type: String, required: true },
  organization: { type: String },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
