const User = require("../database/models/UserModel");

module.exports = {
  async create(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error}`);
    }
  },
  async findAll(userData) {
    try {
      const users = await User.findAll(userData);
      return users;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
  async find(userData) {
    try {
      const users = await User.findOne({ where: userData });
      return users;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
};
