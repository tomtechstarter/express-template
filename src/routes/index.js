const { Router } = require("express");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./user");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/user", UserRouter);

module.exports = { AppRouter };
