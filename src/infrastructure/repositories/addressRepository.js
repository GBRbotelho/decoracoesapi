const Address = require("../database/models/AddressModel");

module.exports = {
  async create(addressData) {
    try {
      const newAddress = await Address.create(addressData);
      return newAddress;
    } catch (error) {
      throw new Error(`Erro ao criar endereço: ${error}`);
    }
  },
  async findAll(addressData) {
    console.log("Passou");
    try {
      const address = await Address.findAll({ where: addressData });
      return address;
    } catch (error) {
      throw new Error(`Erro ao encontrar endereços: ${error}`);
    }
  },
};
