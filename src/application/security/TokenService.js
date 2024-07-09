const jwt = require("jsonwebtoken");

const secret = "password";

const TokenService = {
  create(payload) {
    const registeredDate = new Date();
    registeredDate.setDate(registeredDate.getDate() + 1);

    return jwt.sign(
      { ...payload, registeredAt: registeredDate.getTime() },
      secret
    );
  },

  verify(token) {
    try {
      jwt.verify(token, secret);
      return true;
    } catch (err) {
      return false;
    }
  },
};

module.exports = TokenService;
