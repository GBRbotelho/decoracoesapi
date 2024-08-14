const User = require("../database/schemas/UserModel");

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
      const users = await User.find({ ...userData, _id: userData.id });
      const response = users.map((user) => {
        return { ...user, id: user._id };
      });
      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
  async find(userData) {
    try {
      const users = await User.findOne({ ...userData, _id: userData.id });
      const response = { ...users, id: users._id };
      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
};
