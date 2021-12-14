const express = require("express");
const organizationController = require("../controllers/organization-controller");
const router = express.Router();
router.get("/:organizationId/users", organizationController.getUsers);
module.exports = router;
