const Report = require("../models/report-model");
const Organization = require("../models/organization-model");
const HttpError = require("../utils/HttpError");
const User = require("../models/user-model");

exports.getReports = async (req, res, next) => {
  try {
    const reports = await Report.find({});
    if (!reports) {
      throw new HttpError("cant find reports", 404);
    }
    res.status(200).json({ message: "success", data: reports });
  } catch (e) {
    next(e);
  }
};

exports.addReport = async (req, res, next) => {
  try {
    const report = new Report({
      timestamp: req.body.timestamp || "",
      patient: req.body.patient || "",
      reporter: req.body.reporter || "",
      medicines: req.body.medicines || "",
      anamnesis: req.body.anamnesis || "",
      organization: req.body.organization || "",
      treatment: req.body.treatment || "",
    });
    await report.save();
    res.status(200).json({ message: "success", data: report });
  } catch (e) {
    next(e);
  }
};
exports.deleteReport = async (req, res, next) => {
  try {
    await Report.deleteOne({ _id: req.params.reportId });
    res.status(200).json({ message: "success", data: null });
  } catch (e) {
    next(e);
  }
};
