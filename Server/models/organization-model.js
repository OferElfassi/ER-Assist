const mongoose = require("mongoose");
const addressSchema = require("./addressSchema");
const Schema = mongoose.Schema;
const organizationSchema = new Schema({
  name: { type: String, required: true },
  address: addressSchema,
  users: [{ type: Schema.Types.ObjectId, ref: "user" }],
});
const Organization = mongoose.model("organization", organizationSchema);
module.exports = Organization;
