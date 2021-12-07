const express = require("express");
const UserRoute = require("./router/UserRouter");

const app = express();

app.use(express.json());
app.use("/user", UserRoute)

module.exports = app;
