/* Importação */
const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");
const { PessoaModel } = require("./Pessoa");

/* Definição de modelo de tabela, usando sequelise */
const TelefoneModel = DATABASE.define("telefone", {
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
      model: PessoaModel,
      key: "codigo",
    },
  },
});

/* Exportação */
module.exports = { TelefoneModel };
