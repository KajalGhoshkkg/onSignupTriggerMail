const express = require("express");
const { signUp } = require("../controller/UserController");

const UserRoute = express.Router();

UserRoute.post("/signup", signUp);

module.exports = UserRoute;
