const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Rotas da API
const api = require("./routes/api");

// Parsers para dados POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Rotas da API
app.use("/api", api);

// Catch all other routes and return the index file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

/**
 * Recebe a porta do ambiente e usa no Express.
 */
const port = process.env.PORT || "3000";
app.set("port", port);

/**
 * Servidor HTTP.
 */
const server = http.createServer(app);

/**
 * Servidor escutando na porta especificada.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
