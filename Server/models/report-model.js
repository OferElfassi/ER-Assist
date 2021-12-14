const mongoose = require("mongoose");
const user = require("user-model");
const Schema = mongoose.Schema;
const reportSchema = new mongoose.Schema({
  date: { type: Date },
  patient: { type: Schema.Types.ObjectId, ref: "patient" },
  reporter: { type: Schema.Types.ObjectId, ref: "user" },
  medicines: [{ name: String, amount: Number }],
  anamnesis: { type: String },
  treatment: [{ action: String, timestamp: Date }],
});
const Report = mongoose.model("report", reportSchema);
