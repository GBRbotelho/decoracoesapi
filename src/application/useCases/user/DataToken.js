const TokenService = require("../../security/TokenService");
const repository = require("../../../infrastructure/repositories/userRepository");

const DataToken = async (token) => {
  try {
    if (!token) {
      return { success: false, message: "Token não recebido" };
    }

    const valid = TokenService.verify(token.replace("Bearer ", ""));
    if (!valid) {
      return { success: false, message: "Token Invalido" };
    }
    const tokenDecoded = TokenService.decode(token.replace("Bearer ", ""));
    const user = await repository.find({ id: tokenDecoded.id });

    return {
      success: true,
      message: "Token Valido",
      data: { ...user, password: "" },
    };
  } catch (error) {
    return null;
  }
};

module.exports = DataToken;
