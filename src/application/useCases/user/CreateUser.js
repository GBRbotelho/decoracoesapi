const User = require("../../../domain/User");
const repository = require("../../../infrastructure/repositories/userRepository");
const BcryptEncripter = require("../../security/BcryptEncripter");

const creater = async (data) => {
  try {
    const password = BcryptEncripter.encriptPass(data.password);
    const user = new User({ ...data, password });

    const emailExist = await repository.find({ email: user.email });

    if (emailExist) {
      return { success: false, message: "Email ja utilizado" };
    }

    const response = await repository.create(user);
    return {
      success: true,
      message: "Usuario criado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao criar Usuario:", error);
    return { success: false, message: error };
  }
};

module.exports = creater;
