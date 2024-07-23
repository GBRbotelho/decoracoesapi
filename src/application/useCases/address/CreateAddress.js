const Address = require("../../../domain/Address");
const repository = require("../../../infrastructure/repositories/addressRepository");

const creater = async (data) => {
  try {
    const address = new Address(data);

    const response = await repository.create(address);

    return {
      success: true,
      message: "Endereço criado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao criar Endereço:", error);
    return { success: false, message: error };
  }
};

module.exports = creater;
