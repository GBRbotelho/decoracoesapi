const repository = require("../../../infrastructure/repositories/userRepository");
const subscriptionRepository = require("../../../infrastructure/repositories/subscriptionRepository");

const find = async (id) => {
  try {
    const response = await repository.find({ id });
    const responseSubscription = await subscriptionRepository.findAll({
      userId: id,
    });
    const data = { ...response, subscriptions: responseSubscription };

    return {
      success: true,
      message: "Usuario resgatado com sucesso",
      data: data,
    };
  } catch (error) {
    console.error("Erro ao resgatar Usuario:", error);
    return { success: false, message: error };
  }
};

module.exports = find;
