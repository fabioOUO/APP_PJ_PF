/* Importação */
const { DataTypes } = require("sequelize");
const DATABASE = require("../Config/DataBase");
const { PessoaModel } = require("./Pessoa");

/* Definição de modelo de tabela, usando sequelise */
const PessoaFisicaModel = DATABASE.define("pessoaFisica", {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
  },
  identidade: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
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
module.exports = { PessoaFisicaModel };
