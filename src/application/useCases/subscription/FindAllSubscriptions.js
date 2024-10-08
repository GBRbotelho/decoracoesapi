const repository = require("../../../infrastructure/repositories/subscriptionRepository");
const userRepository = require("../../../infrastructure/repositories/userRepository");

const findAll = async () => {
  try {
    const response = await repository.findAll();
    const responseUser = await userRepository.findAll();
    const subscriptions = response.map((subscription) => {
      const user = responseUser.find((user) => {
        return user.id.toString() === subscription.userId;
      });
      return { ...subscription, user: user };
    });

    return {
      success: true,
      message: "Assinaturas resgatados com sucesso",
      data: subscriptions,
    };
  } catch (error) {
    console.error("Erro ao resgatas Assinaturas:", error);
    return { success: false, message: error };
  }
};

module.exports = findAll;
