const CreateAddress = require("../../application/useCases/address/CreateAddress");
const FindAll = require("../../application/useCases/address/FindAll");

const addressController = {
  async create(req, res) {
    try {
      const data = req.body;

      const created = await CreateAddress(data);

      if (created.success) {
        res.status(200).json(created);
      } else {
        res.status(404).json(created);
      }
    } catch (error) {
      console.error("Erro ao criar Endereço:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async findAll(req, res) {
    try {
      const data = req.body;

      const finded = await FindAll(data);

      if (finded.success) {
        res.status(200).json(finded);
      } else {
        res.status(404).json(finded);
      }
    } catch (error) {
      console.error("Erro ao resgatar Endereços:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
};

module.exports = addressController;
