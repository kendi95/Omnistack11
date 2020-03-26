const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const crypto = require("crypto");

console.log(crypto.randomBytes(4).toString("HEX"));

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3030, () => {
	console.log("Server is running...");
});
