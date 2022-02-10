const mongoose = require("mongoose");

const User = require("../models/user-model");
const Report = require("../models/report-model");
const Organization = require("../models/organization-model");

const { DB_NAME } = require("../config/keys");

const databaseInitialization = async () => {
  // if (mongoose.connection.collections[DB_NAME]) {
  //     await mongoose.connection.collections[DB_NAME].drop();
  // }

  let reports = Report.find({});
  if (!reports || reports.length === 0) {
    // const firstHashtag = new Hashtag({ title: "General" });
    // await firstHashtag.save();
  }
};

module.exports = databaseInitialization;
