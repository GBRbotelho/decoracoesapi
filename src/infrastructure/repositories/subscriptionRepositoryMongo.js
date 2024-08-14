const Subscription = require("../database/schemas/SubscriptionModel");

module.exports = {
  async create(subscriptionData) {
    try {
      const newSubscription = await Subscription.create(subscriptionData);
      const subscription = { ...newSubscription, id: newSubscription._id };
      return subscription;
    } catch (error) {
      throw new Error(`Erro ao criar endereço: ${error}`);
    }
  },
  async findAll(subscriptionData) {
    try {
      const users = await Subscription.find({
        ...subscriptionData,
        _id: subscriptionData.id,
      });
      const response = users.map((user) => {
        return { ...user, id: user._id };
      });

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
  async find(subscriptionData) {
    try {
      const subscription = await Subscription.findOne({
        ...subscriptionData,
        _id: subscriptionData.id,
      });

      const response = { ...subscription, id: subscription._id };

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar endereço: ${error}`);
    }
  },
};
