const connection = require("../database/connection");

class SessionController {
	async store(req, res) {
		const { id } = req.body;
		const ong = await connection("ongs")
			.select("name")
			.where("id", id)
			.first();
		if (!ong) {
			return res.status(400).json({ error: "ONG does not exists." });
		}

		return res.status(200).json(ong);
	}
}

module.exports = new SessionController();
