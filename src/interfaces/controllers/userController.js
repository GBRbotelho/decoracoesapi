const CreateUser = require("../../application/useCases/user/CreateUser");

const userController = {
  async create(req, res) {
    try {
      const data = req.body;

      const created = await CreateUser(data);

      if (created.success) {
        res.status(200).json(created);
      } else {
        res.status(404).json(created);
      }
    } catch (error) {
      console.error("Erro ao criar User:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
};

module.exports = userController;
