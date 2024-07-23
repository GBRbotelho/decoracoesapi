const Address = require("../../../domain/Address");
const repository = require("../../../infrastructure/repositories/addressRepository");
const removeEmptyProperties = require("../../../utils/utils");

const findAll = async (data) => {
  try {
    console.log(removeEmptyProperties(data));
    const response = await repository.findAll(removeEmptyProperties(data));

    return {
      success: true,
      message: "Endereços resgatados com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao resgatas Endereços:", error);
    return { success: false, message: error };
  }
};

module.exports = findAll;
