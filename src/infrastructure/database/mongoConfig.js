const mongoose = require("mongoose");
require("dotenv").config();

// URL de conexão com o MongoDB
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/databaseapi";

// Função para conectar ao MongoDB
const connectToMongoDB = async () => {
  try {
    console.log(mongoURI);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToMongoDB;
