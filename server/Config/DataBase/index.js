require("dotenv").config();

/* Configurações de conexão com o banco de dados */

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATA_BASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT_DATA_BASE,
  }
);

/* Exportação */
module.exports = sequelize;
