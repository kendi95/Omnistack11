const routes = require("express").Router();

routes.get("/", (req, res) => {
	res.json({ message: "Ola mundo" });
});

module.exports = routes;
