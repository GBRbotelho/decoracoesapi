const Address = require("../../../domain/Address");
const repository = require("../../../infrastructure/repositories/addressRepository");

const update = async (data) => {
  try {
    const address = new Address(data);

    const response = await repository.update(address);

    return {
      success: true,
      message: "Endereço atualizado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao atualizar endereço:", error);
    return { success: false, message: error.message };
  }
};

module.exports = update;
