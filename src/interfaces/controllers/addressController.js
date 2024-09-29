const CreateAddress = require("../../application/useCases/address/CreateAddress");
const FindAll = require("../../application/useCases/address/FindAll");
const UpdateAddress = require("../../application/useCases/address/UpdateAddress");
const DeleteAddress = require("../../application/useCases/address/DeleteAddress");

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
  async update(req, res) {
    try {
      const data = req.body;

      const updated = await UpdateAddress(data);

      if (updated.success) {
        res.status(200).json(updated);
      } else {
        res.status(404).json(updated);
      }
    } catch (error) {
      console.error("Erro ao atualizar Endereço:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async delete(req, res) {
    try {
      const data = req.body;

      const deleted = await DeleteAddress(data);

      if (deleted.success) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json(deleted);
      }
    } catch (error) {
      console.error("Erro ao deletar Endereço:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
};

module.exports = addressController;
