const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");
const { Pessoa } = require(".");

/* Definição de modelo de tabela, usando sequelise */
const Telefone = DATABASE.define("telefone", {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  telefone: {
    type: DataTypes.STRING(14),
    allowNull: false,
  },
  codigoPessoa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      /* Declaração de chave estrangeira */
      model: Pessoa,
      key: codigo,
    },
  },
});

/* Exportação */
module.exports = { Telefone };
