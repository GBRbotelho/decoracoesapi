const repository = require("../../../infrastructure/repositories/userRepository");
const BcryptEncripter = require("../../security/BcryptEncripter");
const TokenService = require("../../security/TokenService");

const authenticate = async (data) => {
  const user = await repository.find({ email: data.email });

  if (!user) {
    return { success: false, message: "Usuario ou senha invalido!" };
  }

  const isValid = BcryptEncripter.isValidPass(data.password, user.password);
  if (!isValid) {
    return { success: false, message: "Usuario ou senha invalido!" };
  }
  const token = TokenService.create({
    id: user.id,
  });

  return {
    success: true,
    token,
  };
};

module.exports = authenticate;
