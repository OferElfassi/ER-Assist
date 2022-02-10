const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const organizationSchema = new Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});
const Organization = mongoose.model("organization", organizationSchema);
module.exports = Organization;
