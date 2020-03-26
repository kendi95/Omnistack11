const routes = require("express").Router();
const OngController = require("./controller/OngController");
const IncidentsController = require("./controller/IncidentsController");
const ProfileController = require("./controller/ProfileController");
const SessionController = require("./controller/SessionController");

routes.post("/sessions", SessionController.store);

routes.post("/ongs", OngController.store);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentsController.store);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
