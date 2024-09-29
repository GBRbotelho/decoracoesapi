// const Address = require("../database/models/AddressModel");

// module.exports = {
//   async create(addressData) {
//     try {
//       const newAddress = await Address.create(addressData);
//       return newAddress;
//     } catch (error) {
//       throw new Error(`Erro ao criar endereço: ${error}`);
//     }
//   },
//   async findAll(addressData) {
//     console.log("Passou");
//     try {
//       const address = await Address.findAll({ where: addressData });
//       return address;
//     } catch (error) {
//       throw new Error(`Erro ao encontrar endereços: ${error}`);
//     }
//   },
//   async find(addressData) {
//     try {
//       const address = await Address.findOne({ where: addressData });
//       return address;
//     } catch (error) {
//       throw new Error(`Erro ao encontrar endereço: ${error}`);
//     }
//   },
// };

const Address = require("../database/schemas/AddressModel");
const removeEmptyProperties = require("../../utils/utils");

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
      const dataObj = { ...addressData, _id: addressData.id, id: "" };
      let address = await Address.find(removeEmptyProperties(dataObj));

      const response = address.map((item) => {
        const { _id, ...rest } = item.toObject();
        return { id: _id, ...rest };
      });

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar endereços: ${error}`);
    }
  },
  async find(addressData) {
    try {
      const dataObj = { ...addressData, _id: addressData.id, id: "" };
      const address = await Address.findOne(removeEmptyProperties(dataObj));

      const { _id, ...rest } = address.toObject();

      return { id: _id, ...rest };
    } catch (error) {
      throw new Error(`Erro ao encontrar endereço: ${error}`);
    }
  },
  async update(addressData) {
    try {
      const { id, ...updateData } = addressData;
      const updatedAddress = await Address.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updatedAddress) {
        throw new Error(`Endereço não encontrado com o id: ${id}`);
      }

      const { _id, ...rest } = updatedAddress.toObject();
      return { id: _id, ...rest };
    } catch (error) {
      throw new Error(`Erro ao atualizar endereço: ${error}`);
    }
  },
};
