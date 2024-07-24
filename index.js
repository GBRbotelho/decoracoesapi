require("dotenv").config();
const express = require("express");
const sequelize = require("./src/infrastructure/database/mariaDBConfig");
const User = require("./src/infrastructure/database/models/UserModel");
const app = express();
const PORT = process.env.PORT || 3000;

//Cors
const cors = require("cors");
app.use(cors());

//BodyParser
const bodyParser = require("body-parser");
// ...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Controle de Rotas
const routes = require("./src/interfaces/routes/routes");
app.use(routes);

// Config Mongo
const connectToMongoDB = require("./src/infrastructure/database/mongoConfig");
//connectToMongoDB();

//Server
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
    // Inicia o servidor após sincronizar as tabelas
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar as tabelas:", err);
  });
