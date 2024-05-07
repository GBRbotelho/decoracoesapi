const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: false,
  },
  cpf: {
    type: String,
    required: false,
  },
  sobrenome: {
    type: String,
    required: false,
  },
  ddd: {
    type: String,
    required: false,
  },
  telefone: {
    type: String,
    required: false,
  },
  rua: {
    type: String,
    required: false,
  },
  bairro: {
    type: String,
    required: false,
  },
  numero: {
    type: String,
    required: false,
  },
  cidade: {
    type: String,
    required: false,
  },
  estado: {
    type: String,
    required: false,
  },
  cep: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  idAssinatura: {
    type: String,
    required: false,
  },
  complemento: {
    type: String,
    required: false,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
