const { Router } = require("express");
const { TodosRouter } = require("./todos");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./users");
const authMiddleWare = require("../middlewares/authMiddleware");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/users", authMiddleWare, UserRouter);
AppRouter.use("/todos", TodosRouter);

module.exports = { AppRouter };
