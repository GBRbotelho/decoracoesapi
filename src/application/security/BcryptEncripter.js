const bcrypt = require("bcrypt");

const BcryptEncripter = {
  isValidPass(password, passwordEnc) {
    return bcrypt.compareSync(password, passwordEnc);
  },
  encriptPass(password) {
    return bcrypt.hashSync(password, 10);
  },
};

module.exports = BcryptEncripter;
