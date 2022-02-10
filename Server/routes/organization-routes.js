const express = require("express");
const organizationController = require("../controllers/organization-controller");
const router = express.Router();
router.get("/", organizationController.getOrganizations);
router.post("/", organizationController.addOrganization);
module.exports = router;
