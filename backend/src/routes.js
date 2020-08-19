const { Router } = require("express");

const ProjectController = require("./controllers/ProjectController");
const ValidadeIdMiddleware = require("./middlewares/ValidateIdMiddleware");
const LogRequestMiddleware = require("./middlewares/ValidateIdMiddleware");

const routes = new Router();

routes.use(LogRequestMiddleware);

routes.use("/projects/:id", ValidadeIdMiddleware);

routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.put("/projects/:id", ProjectController.update);
routes.delete("/projects/:id", ProjectController.destroy);

module.exports = routes;
