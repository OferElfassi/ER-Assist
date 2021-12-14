const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pid: { type: String, required: true, unique: true },
});
const Patient = mongoose.model("patient", patientSchema);
