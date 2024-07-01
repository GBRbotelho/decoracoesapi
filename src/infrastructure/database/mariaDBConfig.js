const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("decoracoes", "gabriel", "gabriel123", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    // Configurações adicionais do driver MariaDB, se necessário
  },
  pool: {
    max: 5, // Número máximo de conexões no pool
    min: 0, // Número mínimo de conexões no pool
    acquire: 30000, // Tempo máximo, em milissegundos, que o sequelize aguarda para uma conexão estar disponível no pool
    idle: 10000, // Tempo máximo, em milissegundos, que uma conexão pode ficar inativa no pool antes de ser desconectada
  },
});

module.exports = sequelize;
