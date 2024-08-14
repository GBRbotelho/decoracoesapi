const User = require("../database/schemas/UserModel");
const removeEmptyProperties = require("../../utils/utils");

module.exports = {
  async create(userData) {
    try {
      const newUser = await User.create(userData);
      const response = { ...newUser, id: newUser.id };
      return response;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error}`);
    }
  },
  async findAll(userData = {}) {
    try {
      const dataObj = { ...userData, _id: userData.id, id: "" };
      const users = await User.find(removeEmptyProperties(dataObj));

      const response = users.map((item) => {
        const { _id, ...rest } = item.toObject();
        return { id: _id, ...rest };
      });

      return response;
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
  async find(userData = {}) {
    try {
      const dataObj = { ...userData, _id: userData.id, id: "" };
      let users = await User.findOne(removeEmptyProperties(dataObj));

      const { _id, ...rest } = users.toObject();
      return { id: _id, ...rest };
    } catch (error) {
      throw new Error(`Erro ao encontrar usuários: ${error}`);
    }
  },
};

// const User = require("../database/models/UserModel");

// module.exports = {
//   async create(userData) {
//     try {
//       const newUser = await User.create(userData);
//       return newUser;
//     } catch (error) {
//       throw new Error(`Erro ao criar usuário: ${error}`);
//     }
//   },
//   async findAll(userData) {
//     try {
//       const users = await User.findAll({ where: userData });
//       return users;
//     } catch (error) {
//       throw new Error(`Erro ao encontrar usuários: ${error}`);
//     }
//   },
//   async find(userData) {
//     try {
//       const users = await User.findOne({ where: userData });
//       return users;
//     } catch (error) {
//       throw new Error(`Erro ao encontrar usuários: ${error}`);
//     }
//   },
// };
