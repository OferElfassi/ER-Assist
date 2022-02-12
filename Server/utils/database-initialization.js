const mongoose = require("mongoose");

const User = require("../models/user-model");
const Report = require("../models/report-model");
const Organization = require("../models/organization-model");
const mocker = require("mocker-data-generator").default;
const { DB_NAME } = require("../config/keys");
const bcrypt = require("bcryptjs");
const {
  createMockOrganizations,
  createMockReport,
  createMockUser,
} = require("./mockDataGenerators");

const generateOrganizations = (orgDataArr) => {
  let organizations = [];
  for (let i = 0; i < 5; i++) {
    let organization = new Organization(orgDataArr[i]);
    organizations.push(organization.save());
  }
  return Promise.all(organizations);
};

const encryptUser = async (userObj) => {
  const hashedPassword = await bcrypt.hash(userObj.password, 12);
  userObj.password = hashedPassword;
  await userObj.save();
};
const generateUsers = (organizations) => {
  let users = [];
  for (let j = 0; j < organizations.length; j++) {
    for (let i = 0; i < 30; i++) {
      let user = new User(createMockUser(organizations[j], !(i % 5), i < 15));
      users.push(encryptUser(user));
    }
  }
  return Promise.all(users);
};

const generateReports = (users) => {
  let reports = [];
  for (let j = 0; j < users.length; j++) {
    for (let i = 0; i < 30; i++) {
      let report = new Report(createMockReport(users[j]));
      reports.push(report.save());
    }
  }
  return Promise.all(reports);
};

const generateData = async () => {
  const organizations = await generateOrganizations(createMockOrganizations());
  const users = await generateUsers(organizations);
  const reports = await generateReports(users);

  // console.log(organizations, users, reports);
};

const databaseInitialization = async () => {
  if (mongoose.connection.collections[DB_NAME]) {
    await mongoose.connection.collections[DB_NAME].drop();
  }
  // await mongoose.connection.db.dropDatabase();
  let reports = Report.find({});
  if (!reports || reports.length === 0) {
    await generateData();
  }
};

module.exports = databaseInitialization;
