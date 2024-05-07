const CreateClient = require("../../application/useCases/client/CreateClient");
const clientRepository = require("../../infrastructure/repositories/clientRepository");

const clientController = {
  async create(req, res) {
    try {
      const CreatedClient = await CreateClient(req.body, clientRepository);
      console.log(CreatedClient);

      return res.status(201).json(CreatedClient);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = clientController;
