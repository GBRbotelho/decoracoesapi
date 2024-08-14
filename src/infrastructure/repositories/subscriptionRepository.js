// const Subscription = require("../database/models/SubscriptionModel");

// module.exports = {
//   async create(subscriptionData) {
//     try {
//       const newSubscription = await Subscription.create(subscriptionData);
//       return newSubscription;
//     } catch (error) {
//       throw new Error(`Erro ao criar endereço: ${error}`);
//     }
//   },
//   async findAll(subscriptionData) {
//     try {
//       const users = await Subscription.findAll({ where: subscriptionData });
//       return users;
//     } catch (error) {
//       throw new Error(`Erro ao encontrar usuários: ${error}`);
//     }
//   },
//   async find(subscriptionData) {
//     try {
//       const subscription = await Subscription.findOne({
//         where: subscriptionData,
//       });
//       return subscription;
//     } catch (error) {
//       throw new Error(`Erro ao encontrar endereço: ${error}`);
//     }
//   },
// };

const Subscription = require("../database/schemas/SubscriptionModel");
const removeEmptyProperties = require("../../utils/utils");

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
  async findAll(subscriptionData = {}) {
    try {
      const dataObj = { ...subscriptionData, _id: subscriptionData.id, id: "" };
      const users = await Subscription.find(removeEmptyProperties(dataObj));
      const response = users.map((item) => {
        const { _id, ...rest } = item.toObject();
        return { id: _id, ...rest };
      });

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
  async find(subscriptionData = {}) {
    try {
      const dataObj = { ...subscriptionData, _id: subscriptionData.id, id: "" };
      const subscription = await Subscription.findOne(
        removeEmptyProperties(dataObj)
      );

      const { _id, ...rest } = subscription.toObject();
      return { id: _id, ...rest };
    } catch (error) {
      throw new Error(`Erro ao encontrar endereço: ${error}`);
    }
  },
};
