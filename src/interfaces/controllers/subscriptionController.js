const FindAllSubscriptions = require("../../application/useCases/subscription/FindAllSubscriptions");

const subscriptionController = {
  async findAll(req, res) {
    try {
      const subscriptions = await FindAllSubscriptions();

      if (subscriptions.success) {
        return res.status(200).json(subscriptions);
      } else {
        res.status(404).json(subscriptions);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = subscriptionController;
