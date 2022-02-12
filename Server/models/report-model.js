const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  timestamp: { type: String },
  patient: { fullName: String, id: String },
  reporter: { fullName: String, id: String },
  medicines: [{ name: String, amount: String }],
  anamnesis: { type: String },
  treatment: [{ action: String, timestamp: String }],
  organization: { type: String },
});
const Report = mongoose.model("report", reportSchema);
module.exports = Report;
