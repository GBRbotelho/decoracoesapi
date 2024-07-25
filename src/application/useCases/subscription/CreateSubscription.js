const Subscription = require("../../../domain/Subscription");
const repository = require("../../../infrastructure/repositories/subscriptionRepository");

const creater = async (data) => {
  try {
    const address = new Subscription(data);

    const response = await repository.create(address);

    return {
      success: true,
      message: "Assinatura criado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao criar Assinatura:", error);
    return { success: false, message: error };
  }
};

module.exports = creater;
