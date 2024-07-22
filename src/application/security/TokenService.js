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
      return jwt.verify(token, secret);
    } catch (err) {
      return false;
    }
  },

  decode(token) {
    try {
      return jwt.decode(token, secret, (algorithms = ["HS256"]));
    } catch (err) {
      return false;
    }
  },
};

module.exports = TokenService;
