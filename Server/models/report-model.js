const mongoose = require("mongoose");
const user = require("user-model");
const Schema = mongoose.Schema;
const reportSchema = new mongoose.Schema({
  timestamp: { type: Date },
  patient: { fullName: String, id: String },
  reporter: { fullName: String, id: String },
  medicines: [{ name: String, amount: Number }],
  anamnesis: { type: String },
  treatment: [{ action: String, timestamp: Date }],
  organization: { type: String },
});
const Report = mongoose.model("report", reportSchema);
module.exports = Report;
