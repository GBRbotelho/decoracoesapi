const Address = require("../database/schemas/AddressModel");

module.exports = {
  async create(addressData) {
    try {
      const newAddress = await Address.create(addressData);
      const address = { ...newAddress, id: newAddress._id };
      return address;
    } catch (error) {
      throw new Error(`Erro ao criar endereço: ${error}`);
    }
  },
  async findAll(addressData) {
    try {
      const address = await Address.find({
        ...addressData,
        _id: addressData.id,
      });

      console.log(address);

      const response = address.map((address) => {
        const { _id, ...rest } = address.toObject();
        return { id: _id, ...rest };
      });

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar endereços: ${error}`);
    }
  },
  async find(addressData) {
    try {
      const address = await Address.findOne({
        ...addressData,
        _id: addressData.id,
      });

      const response = { ...address, id: address._id };

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar endereço: ${error}`);
    }
  },
};
