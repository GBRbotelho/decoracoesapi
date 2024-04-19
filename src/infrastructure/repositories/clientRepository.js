const Client = require("../database/schemas/clientSchema");

module.exports = {
  async create(clientData) {
    return await Client.create(clientData);
  },
  async findByCpf(cpf) {
    return await Client.findOne({ cpf });
  },
  async findById(clientId) {
    return await Client.findById(clientId);
  },
  async update(clientId, clientData) {
    return await Client.findByIdAndUpdate(clientId, clientData, { new: true });
  },
  async getAll() {
    return await Client.find();
  },
  async getById(clientId) {
    return await Client.findById(clientId);
  },
  async delete(clientId) {
    return await Client.findByIdAndDelete(clientId);
  },
};
