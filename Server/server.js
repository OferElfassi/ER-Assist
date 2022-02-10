const express = require("express");
const organizationRouter = require("./routes/organization-routes");
const userRouter = require("./routes/user-routes");
const reportRouter = require("./routes/report-routes");
const authRouter = require("./routes/auth-routes");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/organizations", organizationRouter);
app.use("/users", userRouter);
app.use("/reports", reportRouter);
app.use("/auth", authRouter);
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.json({ message: err.message || "unknown error" });
});
app.listen(port, () => console.log("Server connected"));
