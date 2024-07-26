const Subscription = require("../database/models/SubscriptionModel");

module.exports = {
  async create(subscriptionData) {
    try {
      const newSubscription = await Subscription.create(subscriptionData);
      return newSubscription;
    } catch (error) {
      throw new Error(`Erro ao criar endereço: ${error}`);
    }
  },
  async findAll(subscriptionData) {
    try {
      const users = await Subscription.findAll({ where: subscriptionData });
      return users;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
  async find(subscriptionData) {
    try {
      const subscription = await Subscription.findOne({
        where: subscriptionData,
      });
      return subscription;
    } catch (error) {
      throw new Error(`Erro ao encontrar endereço: ${error}`);
    }
  },
};
