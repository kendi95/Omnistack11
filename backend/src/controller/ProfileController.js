const connection = require("../database/connection");

class IncidentsController {
	async index(req, res) {
		const ong_id = req.headers.authorization;
		const incidents = await connection("incidents")
			.select("*")
			.where("ong_id", ong_id);
		return res.status(200).json(incidents);
	}
}

module.exports = new IncidentsController();
