const CreateUser = require("../../application/useCases/user/CreateUser");
const AuthenticateUser = require("../../application/useCases/user/AuthenticateUser");
const DataToken = require("../../application/useCases/user/DataToken");
const FindAllUsers = require("../../application/useCases/user/FindAllUsers");

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
  async authenticate(req, res) {
    try {
      const data = req.body;

      const authenticated = await AuthenticateUser(data);

      if (authenticated.success) {
        res.status(200).json(authenticated);
      } else {
        res.status(404).json(authenticated);
      }
    } catch (error) {
      console.error("Erro ao autenticar User:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },

  async dataToken(req, res) {
    try {
      const token = req.headers.authorization;

      const userData = await DataToken(token);

      if (userData.success) {
        return res.status(200).json(userData);
      } else {
        res.status(404).json(userData);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async findAll(req, res) {
    try {
      const users = await FindAllUsers();

      if (users.success) {
        return res.status(200).json(users);
      } else {
        res.status(404).json(users);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
