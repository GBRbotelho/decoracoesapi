const repository = require("../../../infrastructure/repositories/userRepository");

const findAll = async () => {
  try {
    const response = await repository.findAll();

    return {
      success: true,
      message: "Usuarios resgatados com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao resgatas Usuarios:", error);
    return { success: false, message: error };
  }
};

module.exports = findAll;
