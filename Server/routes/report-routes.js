const express = require("express");
const reportController = require("../controllers/report-controller");
const router = express.Router();
router.get("/", reportController.getReports);
router.post("/", reportController.addReport);
router.delete("/:reportId", reportController.deleteReport);
module.exports = router;
