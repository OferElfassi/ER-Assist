const express = require("express");
const organizationRouter = require("./routes/organization-routes");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/organization", organizationRouter);
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.json({ message: err.message || "unknown error" });
});
app.listen(port, () => console.log("Server connected"));
n;
