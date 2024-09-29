const Address = require("../../../domain/Address");
const repository = require("../../../infrastructure/repositories/addressRepository");

const deleteAddress = async (data) => {
  try {
    const { id } = data;

    const response = await repository.delete({ id });

    return {
      success: true,
      message: response.message,
      id: id,
    };
  } catch (error) {
    console.error("Erro ao deletar endereço:", error);
    return { success: false, message: error.message };
  }
};

module.exports = deleteAddress;
